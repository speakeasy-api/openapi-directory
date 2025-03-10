<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetLoadBalancerTypesResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * The `load_balancer_types` key in the reply contains an array of Load Balancer type objects with this structure
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\GetLoadBalancerTypes200ApplicationJSON $getLoadBalancerTypes200ApplicationJSONObject
     */
	
    public ?GetLoadBalancerTypes200ApplicationJSON $getLoadBalancerTypes200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->getLoadBalancerTypes200ApplicationJSONObject = null;
	}
}
