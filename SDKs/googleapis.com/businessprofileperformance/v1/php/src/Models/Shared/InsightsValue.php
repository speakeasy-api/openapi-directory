<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InsightsValue - Represents an insights value.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InsightsValue
{
    /**
     * Represents the threshold below which the actual value falls.
     * 
     * @var ?string $threshold
     */
	#[\JMS\Serializer\Annotation\SerializedName('threshold')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $threshold = null;
    
    /**
     * Represents the actual value.
     * 
     * @var ?string $value
     */
	#[\JMS\Serializer\Annotation\SerializedName('value')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $value = null;
    
	public function __construct()
	{
		$this->threshold = null;
		$this->value = null;
	}
}
