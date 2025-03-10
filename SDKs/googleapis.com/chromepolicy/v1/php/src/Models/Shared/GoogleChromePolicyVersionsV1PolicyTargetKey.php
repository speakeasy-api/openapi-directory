<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleChromePolicyVersionsV1PolicyTargetKey - The key used to identify the target on which the policy will be applied.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleChromePolicyVersionsV1PolicyTargetKey
{
    /**
     * Map containing the additional target key name and value pairs used to further identify the target of the policy.
     * 
     * @var ?array<string, string> $additionalTargetKeys
     */
	#[\JMS\Serializer\Annotation\SerializedName('additionalTargetKeys')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $additionalTargetKeys = null;
    
    /**
     * The target resource on which this policy is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") * Group ("groups/{group_id}")
     * 
     * @var ?string $targetResource
     */
	#[\JMS\Serializer\Annotation\SerializedName('targetResource')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $targetResource = null;
    
	public function __construct()
	{
		$this->additionalTargetKeys = null;
		$this->targetResource = null;
	}
}
