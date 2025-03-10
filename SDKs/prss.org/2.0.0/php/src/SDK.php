<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI;

/**
 * SDK - ContentDepot hosts a range of API’s that allow clients to manage, discover, and obtain content. The API spans many parts of the ContentDepot functionality including MetaPub (a.k.a. metadata distribution) and content management.
 * 
 * 
 * ## MetaPub
 * 
 * MetaPub collects, normalizes and distributes publicly available program, episode, and piece metadata through the public radio system. Backed by ContentDepot and its data model, MetaPub allows producers to supply metadata through various methods:
 * 
 * 1. MetaPub Agents that collect producer metadata by "crawling" existing public feeds (e.g. C24, BBC) or the producer's production system (e.g. ATC, ME, TED Radio Hour).
 * 2. Manually enter metadata in the ContentDepot Portal on each program and episode.
 * 3. Publish/push the metadata to the MetaPub upload API and execute an ingest job.
 * 
 * MetaPub then distributes this data to stations through an electronic program guide (EPG model) for display on various listener devices such as smart phones, tablets, web streams, HD radios, RDBS enabled FM radios, and more. The EPG format is based on the RadioDNS specifications.
 * 
 * ### RadioDNS
 * 
 * The RadioDNS Service and Programme Information Specification ([ETSI TS 102 818 v3.4.1](https://www.etsi.org/deliver/etsi_ts/102800_102899/102818/03.04.01_60/ts_102818v030401p.pdf)) defines three primary documents: Service Information, Program Information, and Group Information. These documents, along with the core RadioDNS Hybrid Lookup for Radio Services Specification ([ETSI TS 103 270 v1.4.1](https://www.etsi.org/deliver/etsi_ts/103200_103299/103270/01.04.01_60/ts_103270v010401p.pdf)), define a system where an end listener device can dynamically discover program metadata and fetch the metadata via Internet Protocol (IP) requests. MetaPub's use of RadioDNS differs slightly in that MetaPub (a.k.a PRSS) acts as the "service provider" while the stations and related middleware act as the end devices. While this is not the primary use case of RadioDNS, the flexibility in the specification, service definitions, and DNS resolution allows this model to be easily represented. MetaPub provides both _National Metadata_ and _Station Metadata_.
 * 
 * It is strongly recommended that the related [RadioDNS specifications](https://radiodns.org/developers/documentation/) be read for implementation details, definitions, and required XML schemas.
 * 
 * ## ContentDepot Drive
 * 
 * ContentDepot Drive (CD Drive) provides a private, per customer file storage solution similar to other cloud storage solutions such as Google Drive, Box, and Dropbox. The CD Drive is used to stage content uploads such as metadata files, images, or segment audio before associating the content with specific programs or episodes.
 * 
 * CD Drive content can be referenced using a URI by some operations such as synchronizing metadata. There are two possible CD Drive URI formats supported: ID and hierarchical path. The ID reference takes the form ```cddrive:id:{value}``` where value is the integer ID of the file or folder being referenced. The hierarchical path reference takes the form ```cddrive://{path}``` where path is the full, UNIX style path to the file or folder starting with '/'. For example, two CD Drive URIs pointing to the same file may be ```cddrive:id:12345``` and ```cddrive:///show1/episode2/metadata.xml```. More information about URIs can be found at [Wikipedia](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier).
 * 
 * ## Authentication
 * 
 * The API currently uses OAuth 2.0.  All operations require ```cd:full``` access where the client access is only limited by the permissions of the ContentDepot user after authentication. Limiting access scope per client is not currently supported.
 * 
 * 
 * @package OpenAPI\OpenAPI
 * @access public
 */
class SDK
{
  	
    /**
     * Broadcast services can subscribe to content for multiple destinations.
     * 
     * @var BroadcastServices $$broadcastServices
     */
	public BroadcastServices $broadcastServices;
	
    /**
     * ContentDepot Drive functionality for uploading and stating content files for use in other API operations.
     * 
     * @var CDDrive $$cdDrive
     */
	public CDDrive $cdDrive;
	
    /**
     * An episode is a specific instance of a program that will air on a specific date and time.
     * 
     * @var Episodes $$episodes
     */
	public Episodes $episodes;
	
    /**
     * Endpoints to access MetaPub ingest functionality such as synchronizing producer metadata to programs and episodes. These API operations are deprecated. Use the pieces endpoints instead.
     * 
     * @var MetaPub $$metaPub
     */
	public MetaPub $metaPub;
	
    /**
     * Pieces define specific story or song level metadata within an episode and segment. For example, an 18 minute audio segment may be composed of multiple 2 or 3 minute pieces.
     * 
     * @var Pieces $$pieces
     */
	public Pieces $pieces;
	
    /**
     * Program information including searching for existing programs or fetching a specific program. A program is a collection of episodes that are delivered by ContentDepot as a live stream or pre-recorded files.
     * 
     * @var Programs $$programs
     */
	public Programs $programs;
	
    /**
     * Endpoints to access the RadioDNS formatted national program information (SI and PI documents) for stations to use in middleware that is capable of scheduling and extracting the information. Station specific SI and PI documents are provided via a different mechanism.
     * 
     * @var RadioDNS $$radioDNS
     */
	public RadioDNS $radioDNS;
	
    /**
     * Segments include the audio content and related information such as the in-cue and out-cue.
     * 
     * @var Segments $$segments
     */
	public Segments $segments;
	
    /**
     * Spot insertions define spots to play when a cue is received.
     * 
     * @var SpotInsertions $$spotInsertions
     */
	public SpotInsertions $spotInsertions;
	
    /**
     * A spot is an audio file that is to be inserted into streams using cues.
     * 
     * @var Spots $$spots
     */
	public Spots $spots;
		
	// SDK private variables namespaced with _ to avoid conflicts with API models
	private ?\GuzzleHttp\ClientInterface $_defaultClient;
	private ?\GuzzleHttp\ClientInterface $_securityClient;
	
	private string $_serverUrl;
	private string $_language = 'php';
	private string $_sdkVersion = '0.0.1';
	private string $_genVersion = 'internal';

	/**
	 * Returns a new instance of the SDK builder used to configure and create the SDK instance.
	 * 
	 * @return SDKBuilder
	 */
	public static function builder(): SDKBuilder
	{
		return new SDKBuilder();
	}

	/**
	 * @param \GuzzleHttp\ClientInterface|null $client
	 * @param string $serverUrl
	 * @param array<string, string>|null $params
	 */
	public function __construct(?\GuzzleHttp\ClientInterface $client, string $serverUrl, ?array $params)
	{
		$this->_defaultClient = $client;
		
		if ($this->_defaultClient === null) {
			$this->_defaultClient = new \GuzzleHttp\Client([
				'timeout' => 60,
			]);
		}

		$this->_securityClient = null;
		if ($this->_securityClient === null) {
			$this->_securityClient = $this->_defaultClient;
		}

		if (!empty($serverUrl)) {
			$this->_serverUrl = Utils\Utils::templateUrl($serverUrl, $params);
		}
		
		
		$this->broadcastServices = new BroadcastServices(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
		
		$this->cdDrive = new CDDrive(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
		
		$this->episodes = new Episodes(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
		
		$this->metaPub = new MetaPub(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
		
		$this->pieces = new Pieces(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
		
		$this->programs = new Programs(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
		
		$this->radioDNS = new RadioDNS(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
		
		$this->segments = new Segments(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
		
		$this->spotInsertions = new SpotInsertions(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
		
		$this->spots = new Spots(
			$this->_defaultClient,
			$this->_securityClient,
			$this->_serverUrl,
			$this->_language,
			$this->_sdkVersion,
			$this->_genVersion
		);
	}
}