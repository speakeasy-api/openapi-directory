<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class StorageObjectsWatchAllRequest
{
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public ?\OpenAPI\OpenAPI\Models\Shared\Channel $channel = null;
    
    /**
     * Data format for the response.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=alt')]
    public ?\OpenAPI\OpenAPI\Models\Shared\AltEnum $alt = null;
    
    /**
     * Name of the bucket in which to look for objects.
     * 
     * @var string $bucket
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=bucket')]
    public string $bucket;
    
    /**
     * Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are omitted.
     * 
     * @var ?string $delimiter
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=delimiter')]
    public ?string $delimiter = null;
    
    /**
     * Selector specifying which fields to include in a partial response.
     * 
     * @var ?string $fields
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=fields')]
    public ?string $fields = null;
    
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     * 
     * @var ?string $key
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=key')]
    public ?string $key = null;
    
    /**
     * Maximum number of items plus prefixes to return. As duplicate prefixes are omitted, fewer total results may be returned than requested.
     * 
     * @var ?int $maxResults
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=maxResults')]
    public ?int $maxResults = null;
    
    /**
     * OAuth 2.0 token for the current user.
     * 
     * @var ?string $oauthToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=oauth_token')]
    public ?string $oauthToken = null;
    
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     * 
     * @var ?string $pageToken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=pageToken')]
    public ?string $pageToken = null;
    
    /**
     * Filter results to objects whose names begin with this prefix.
     * 
     * @var ?string $prefix
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=prefix')]
    public ?string $prefix = null;
    
    /**
     * Returns response with indentations and line breaks.
     * 
     * @var ?bool $prettyPrint
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=prettyPrint')]
    public ?bool $prettyPrint = null;
    
    /**
     * Set of properties to return. Defaults to noAcl.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\StorageObjectsWatchAllProjectionEnum $projection
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=projection')]
    public ?StorageObjectsWatchAllProjectionEnum $projection = null;
    
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     * 
     * @var ?string $quotaUser
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=quotaUser')]
    public ?string $quotaUser = null;
    
    /**
     * Deprecated. Please use quotaUser instead.
     * 
     * @var ?string $userIp
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=userIp')]
    public ?string $userIp = null;
    
    /**
     * If true, lists all versions of a file as distinct results.
     * 
     * @var ?bool $versions
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=versions')]
    public ?bool $versions = null;
    
	public function __construct()
	{
		$this->channel = null;
		$this->alt = null;
		$this->bucket = "";
		$this->delimiter = null;
		$this->fields = null;
		$this->key = null;
		$this->maxResults = null;
		$this->oauthToken = null;
		$this->pageToken = null;
		$this->prefix = null;
		$this->prettyPrint = null;
		$this->projection = null;
		$this->quotaUser = null;
		$this->userIp = null;
		$this->versions = null;
	}
}
