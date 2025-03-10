<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AudienceSegment - Audience Segment.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AudienceSegment
{
    /**
     * Weight allocated to this segment. The weight assigned will be understood in proportion to the weights assigned to other segments in the same segment group. Acceptable values are 1 to 1000, inclusive.
     * 
     * @var ?int $allocation
     */
	#[\JMS\Serializer\Annotation\SerializedName('allocation')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $allocation = null;
    
    /**
     * ID of this audience segment. This is a read-only, auto-generated field.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * Name of this audience segment. This is a required field and must be less than 65 characters long.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	public function __construct()
	{
		$this->allocation = null;
		$this->id = null;
		$this->name = null;
	}
}
