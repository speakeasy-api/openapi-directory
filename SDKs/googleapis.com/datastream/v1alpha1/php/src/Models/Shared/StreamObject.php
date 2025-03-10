<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * StreamObject - A specific stream object (e.g a specific DB table).
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class StreamObject
{
    /**
     * Represents a backfill job on a specific stream object.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BackfillJob $backfillJob
     */
	#[\JMS\Serializer\Annotation\SerializedName('backfillJob')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\BackfillJob')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?BackfillJob $backfillJob = null;
    
    /**
     * Output only. The creation time of the object.
     * 
     * @var ?string $createTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('createTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createTime = null;
    
    /**
     * Required. Display name.
     * 
     * @var ?string $displayName
     */
	#[\JMS\Serializer\Annotation\SerializedName('displayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
    /**
     * Output only. Active errors on the object.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Error> $errors
     */
	#[\JMS\Serializer\Annotation\SerializedName('errors')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Error>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $errors = null;
    
    /**
     * Output only. The object's name.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Represents an identifier of an object in the data source.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SourceObjectIdentifier $sourceObject
     */
	#[\JMS\Serializer\Annotation\SerializedName('sourceObject')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\SourceObjectIdentifier')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?SourceObjectIdentifier $sourceObject = null;
    
    /**
     * Output only. The last update time of the object.
     * 
     * @var ?string $updateTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('updateTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updateTime = null;
    
	public function __construct()
	{
		$this->backfillJob = null;
		$this->createTime = null;
		$this->displayName = null;
		$this->errors = null;
		$this->name = null;
		$this->sourceObject = null;
		$this->updateTime = null;
	}
}
