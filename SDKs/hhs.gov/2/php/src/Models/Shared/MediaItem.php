<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class MediaItem
{
    /**
     * $campaigns
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Campaign> $campaigns
     */
	#[\JMS\Serializer\Annotation\SerializedName('campaigns')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Campaign>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $campaigns = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('createdBy')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createdBy = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('customAttributionUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customAttributionUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('customPreviewUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customPreviewUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('customThumbnailUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $customThumbnailUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('dateContentAuthored')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateContentAuthored = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('dateContentPublished')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateContentPublished = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('dateContentReviewed')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateContentReviewed = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('dateContentUpdated')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateContentUpdated = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('dateSyndicationCaptured')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateSyndicationCaptured = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('dateSyndicationUpdated')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateSyndicationUpdated = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('dateSyndicationVisible')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d', '', '|Y-m-d'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateSyndicationVisible = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * $extendedAttributes
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ExtendedAttribute> $extendedAttributes
     */
	#[\JMS\Serializer\Annotation\SerializedName('extendedAttributes')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ExtendedAttribute>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $extendedAttributes = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('externalGuid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $externalGuid = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('foreignSyndicationAPIUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $foreignSyndicationAPIUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('hash')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $hash = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('language')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Language')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Language $language = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('mediaType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $mediaType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('source')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Source')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Source $source = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('sourceUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sourceUrl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('targetUrl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $targetUrl = null;
    
	public function __construct()
	{
		$this->campaigns = null;
		$this->createdBy = null;
		$this->customAttributionUrl = null;
		$this->customPreviewUrl = null;
		$this->customThumbnailUrl = null;
		$this->dateContentAuthored = null;
		$this->dateContentPublished = null;
		$this->dateContentReviewed = null;
		$this->dateContentUpdated = null;
		$this->dateSyndicationCaptured = null;
		$this->dateSyndicationUpdated = null;
		$this->dateSyndicationVisible = null;
		$this->description = null;
		$this->extendedAttributes = null;
		$this->externalGuid = null;
		$this->foreignSyndicationAPIUrl = null;
		$this->hash = null;
		$this->id = null;
		$this->language = null;
		$this->mediaType = null;
		$this->name = null;
		$this->source = null;
		$this->sourceUrl = null;
		$this->targetUrl = null;
	}
}
