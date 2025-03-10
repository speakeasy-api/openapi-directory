<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class ManualDiscoverIpv4Request
{
    /**
     * Manual discovery input data.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\ManualDiscoveryNodeIpv4Info $manualDiscoveryNodeIpv4Info
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\ManualDiscoveryNodeIpv4Info $manualDiscoveryNodeIpv4Info;
    
    /**
     * ID of the Rubrik cluster, or *me* for the current cluster.
     * 
     * @var string $id
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=id')]
    public string $id;
    
	public function __construct()
	{
		$this->manualDiscoveryNodeIpv4Info = new \OpenAPI\OpenAPI\Models\Shared\ManualDiscoveryNodeIpv4Info();
		$this->id = "";
	}
}
