<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GatewayServiceMesh - Information about the Kubernetes Gateway API service mesh configuration.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GatewayServiceMesh
{
    /**
     * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
     * 
     * @var ?string $deployment
     */
	#[\JMS\Serializer\Annotation\SerializedName('deployment')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $deployment = null;
    
    /**
     * Required. Name of the Gateway API HTTPRoute.
     * 
     * @var ?string $httpRoute
     */
	#[\JMS\Serializer\Annotation\SerializedName('httpRoute')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $httpRoute = null;
    
    /**
     * Required. Name of the Kubernetes Service.
     * 
     * @var ?string $service
     */
	#[\JMS\Serializer\Annotation\SerializedName('service')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $service = null;
    
	public function __construct()
	{
		$this->deployment = null;
		$this->httpRoute = null;
		$this->service = null;
	}
}
