<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PositionedObject - An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PositionedObject
{
    /**
     * The ID of this positioned object.
     * 
     * @var ?string $objectId
     */
	#[\JMS\Serializer\Annotation\SerializedName('objectId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $objectId = null;
    
    /**
     * Properties of a PositionedObject.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PositionedObjectProperties $positionedObjectProperties
     */
	#[\JMS\Serializer\Annotation\SerializedName('positionedObjectProperties')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PositionedObjectProperties')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PositionedObjectProperties $positionedObjectProperties = null;
    
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     * 
     * @var ?array<string> $suggestedDeletionIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('suggestedDeletionIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $suggestedDeletionIds = null;
    
    /**
     * The suggested insertion ID. If empty, then this is not a suggested insertion.
     * 
     * @var ?string $suggestedInsertionId
     */
	#[\JMS\Serializer\Annotation\SerializedName('suggestedInsertionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $suggestedInsertionId = null;
    
    /**
     * The suggested changes to the positioned object properties, keyed by suggestion ID.
     * 
     * @var ?array<string, \OpenAPI\OpenAPI\Models\Shared\SuggestedPositionedObjectProperties> $suggestedPositionedObjectPropertiesChanges
     */
	#[\JMS\Serializer\Annotation\SerializedName('suggestedPositionedObjectPropertiesChanges')]
    #[\JMS\Serializer\Annotation\Type('array<string, OpenAPI\OpenAPI\Models\Shared\SuggestedPositionedObjectProperties>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $suggestedPositionedObjectPropertiesChanges = null;
    
	public function __construct()
	{
		$this->objectId = null;
		$this->positionedObjectProperties = null;
		$this->suggestedDeletionIds = null;
		$this->suggestedInsertionId = null;
		$this->suggestedPositionedObjectPropertiesChanges = null;
	}
}
