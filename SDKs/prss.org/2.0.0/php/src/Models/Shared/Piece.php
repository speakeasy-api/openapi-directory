<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Piece - The metadata about a "piece" which may be a story, song, report, etc.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Piece
{
    /**
     * The artist or contributor name.
     * 
     * @var ?string $contributor
     */
	#[\JMS\Serializer\Annotation\SerializedName('contributor')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contributor = null;
    
    /**
     * The date the piece was created. Generated at creation.
     * 
     * @var ?\DateTime $createdDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('createdDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $createdDate = null;
    
    /**
     * The short description of the piece.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * The ID of the episode that owns the piece.
     * 
     * @var int $episodeId
     */
	#[\JMS\Serializer\Annotation\SerializedName('episodeId')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $episodeId;
    
    /**
     * The long description of the piece.
     * 
     * @var ?string $fullDescription
     */
	#[\JMS\Serializer\Annotation\SerializedName('fullDescription')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fullDescription = null;
    
    /**
     * The unique ID of the piece. Generated at creation.
     * 
     * @var ?int $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $id = null;
    
    /**
     * The URI to the piece image content in CD Drive. Format should be 'cddrive:id:{value}' or 'cddrive://{path}'. This property is only used on modification and is not returned.
     * 
     * @var ?string $imageCdDriveUri
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageCdDriveUri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageCdDriveUri = null;
    
    /**
     * The name of the piece image file. Generated at creation.
     * 
     * @var ?string $imageFileName
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageFileName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageFileName = null;
    
    /**
     * The size of the piece image file in bytes. Generated at creation.
     * 
     * @var ?int $imageFileSize
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageFileSize')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $imageFileSize = null;
    
    /**
     * The user's original name of the piece image file.
     * 
     * @var ?string $imageOriginalFileName
     */
	#[\JMS\Serializer\Annotation\SerializedName('imageOriginalFileName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $imageOriginalFileName = null;
    
    /**
     * The date the piece was last modified/updated. Automatically updated on any write operation.
     * 
     * @var ?\DateTime $lastModifiedDate
     */
	#[\JMS\Serializer\Annotation\SerializedName('lastModifiedDate')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $lastModifiedDate = null;
    
    /**
     * Seconds relative to the start of the episode.
     * 
     * @var int $relativeEndTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('relativeEndTime')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $relativeEndTime;
    
    /**
     * Seconds relative to the start of the episode.
     * 
     * @var int $relativeStartTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('relativeStartTime')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $relativeStartTime;
    
    /**
     * The number of the segment that this piece is in, starting with 1. This is an optional field but it can be used to provide more detail by linking the piece to a specific audio segment.
     * 
     * @var ?int $segmentNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('segmentNumber')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $segmentNumber = null;
    
    /**
     * The human readable title of the piece that is normally displayed on an end user's device.
     * 
     * @var string $title
     */
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $title;
    
	public function __construct()
	{
		$this->contributor = null;
		$this->createdDate = null;
		$this->description = null;
		$this->episodeId = 0;
		$this->fullDescription = null;
		$this->id = null;
		$this->imageCdDriveUri = null;
		$this->imageFileName = null;
		$this->imageFileSize = null;
		$this->imageOriginalFileName = null;
		$this->lastModifiedDate = null;
		$this->relativeEndTime = 0;
		$this->relativeStartTime = 0;
		$this->segmentNumber = null;
		$this->title = "";
	}
}
