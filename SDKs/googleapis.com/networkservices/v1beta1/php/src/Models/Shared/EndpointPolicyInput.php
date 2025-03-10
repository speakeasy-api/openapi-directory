<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * EndpointPolicyInput - EndpointPolicy is a resource that helps apply desired configuration on the endpoints that match specific criteria. For example, this resource can be used to apply "authentication config" an all endpoints that serve on port 8080.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class EndpointPolicyInput
{
    /**
     * Optional. This field specifies the URL of AuthorizationPolicy resource that applies authorization policies to the inbound traffic at the matched endpoints. Refer to Authorization. If this field is not specified, authorization is disabled(no authz checks) for this endpoint.
     * 
     * @var ?string $authorizationPolicy
     */
	#[\JMS\Serializer\Annotation\SerializedName('authorizationPolicy')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $authorizationPolicy = null;
    
    /**
     * Optional. A URL referring to a ClientTlsPolicy resource. ClientTlsPolicy can be set to specify the authentication for traffic from the proxy to the actual endpoints. More specifically, it is applied to the outgoing traffic from the proxy to the endpoint. This is typically used for sidecar model where the proxy identifies itself as endpoint to the control plane, with the connection between sidecar and endpoint requiring authentication. If this field is not set, authentication is disabled(open). Applicable only when EndpointPolicyType is SIDECAR_PROXY.
     * 
     * @var ?string $clientTlsPolicy
     */
	#[\JMS\Serializer\Annotation\SerializedName('clientTlsPolicy')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $clientTlsPolicy = null;
    
    /**
     * Optional. A free-text description of the resource. Max length 1024 characters.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * A definition of a matcher that selects endpoints to which the policies should be applied.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EndpointMatcher $endpointMatcher
     */
	#[\JMS\Serializer\Annotation\SerializedName('endpointMatcher')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\EndpointMatcher')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EndpointMatcher $endpointMatcher = null;
    
    /**
     * Optional. Set of label tags associated with the EndpointPolicy resource.
     * 
     * @var ?array<string, string> $labels
     */
	#[\JMS\Serializer\Annotation\SerializedName('labels')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $labels = null;
    
    /**
     * Required. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Optional. A URL referring to ServerTlsPolicy resource. ServerTlsPolicy is used to determine the authentication policy to be applied to terminate the inbound traffic at the identified backends. If this field is not set, authentication is disabled(open) for this endpoint.
     * 
     * @var ?string $serverTlsPolicy
     */
	#[\JMS\Serializer\Annotation\SerializedName('serverTlsPolicy')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serverTlsPolicy = null;
    
    /**
     * Specification of a port-based selector.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\TrafficPortSelector $trafficPortSelector
     */
	#[\JMS\Serializer\Annotation\SerializedName('trafficPortSelector')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TrafficPortSelector')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TrafficPortSelector $trafficPortSelector = null;
    
    /**
     * Required. The type of endpoint policy. This is primarily used to validate the configuration.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\EndpointPolicyTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\EndpointPolicyTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EndpointPolicyTypeEnum $type = null;
    
	public function __construct()
	{
		$this->authorizationPolicy = null;
		$this->clientTlsPolicy = null;
		$this->description = null;
		$this->endpointMatcher = null;
		$this->labels = null;
		$this->name = null;
		$this->serverTlsPolicy = null;
		$this->trafficPortSelector = null;
		$this->type = null;
	}
}
