<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UrlAssignedTargetingOptionDetails - Details for assigned URL targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_URL`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UrlAssignedTargetingOptionDetails
{
    /**
     * Indicates if this option is being negatively targeted.
     * 
     * @var ?bool $negative
     */
	#[\JMS\Serializer\Annotation\SerializedName('negative')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $negative = null;
    
    /**
     * Required. The URL, for example `example.com`. DV360 supports two levels of subdirectory targeting, for example `www.example.com/one-subdirectory-level/second-level`, and five levels of subdomain targeting, for example `five.four.three.two.one.example.com`.
     * 
     * @var ?string $url
     */
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->negative = null;
		$this->url = null;
	}
}
