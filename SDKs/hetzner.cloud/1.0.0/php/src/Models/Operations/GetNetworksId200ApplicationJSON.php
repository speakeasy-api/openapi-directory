<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetNetworksId200ApplicationJSON - The `network` key contains the network
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetNetworksId200ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('network')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\GetNetworksId200ApplicationJSONNetwork')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GetNetworksId200ApplicationJSONNetwork $network = null;
    
	public function __construct()
	{
		$this->network = null;
	}
}
