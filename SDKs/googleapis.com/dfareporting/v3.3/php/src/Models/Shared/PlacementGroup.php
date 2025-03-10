<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PlacementGroup - Contains properties of a package or roadblock.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PlacementGroup
{
    /**
     * Account ID of this placement group. This is a read-only field that can be left blank.
     * 
     * @var ?string $accountId
     */
	#[\JMS\Serializer\Annotation\SerializedName('accountId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountId = null;
    
    /**
     * Advertiser ID of this placement group. This is a required field on insertion.
     * 
     * @var ?string $advertiserId
     */
	#[\JMS\Serializer\Annotation\SerializedName('advertiserId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $advertiserId = null;
    
    /**
     * Represents a DimensionValue resource.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DimensionValue $advertiserIdDimensionValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('advertiserIdDimensionValue')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DimensionValue')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DimensionValue $advertiserIdDimensionValue = null;
    
    /**
     * Whether this placement group is archived.
     * 
     * @var ?bool $archived
     */
	#[\JMS\Serializer\Annotation\SerializedName('archived')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $archived = null;
    
    /**
     * Campaign ID of this placement group. This field is required on insertion.
     * 
     * @var ?string $campaignId
     */
	#[\JMS\Serializer\Annotation\SerializedName('campaignId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $campaignId = null;
    
    /**
     * Represents a DimensionValue resource.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DimensionValue $campaignIdDimensionValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('campaignIdDimensionValue')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DimensionValue')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DimensionValue $campaignIdDimensionValue = null;
    
    /**
     * IDs of placements which are assigned to this placement group. This is a read-only, auto-generated field.
     * 
     * @var ?array<string> $childPlacementIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('childPlacementIds')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $childPlacementIds = null;
    
    /**
     * Comments for this placement group.
     * 
     * @var ?string $comment
     */
	#[\JMS\Serializer\Annotation\SerializedName('comment')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $comment = null;
    
    /**
     * ID of the content category assigned to this placement group.
     * 
     * @var ?string $contentCategoryId
     */
	#[\JMS\Serializer\Annotation\SerializedName('contentCategoryId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contentCategoryId = null;
    
    /**
     * Modification timestamp.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo $createInfo
     */
	#[\JMS\Serializer\Annotation\SerializedName('createInfo')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LastModifiedInfo $createInfo = null;
    
    /**
     * Directory site ID associated with this placement group. On insert, you must set either this field or the site_id field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
     * 
     * @var ?string $directorySiteId
     */
	#[\JMS\Serializer\Annotation\SerializedName('directorySiteId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $directorySiteId = null;
    
    /**
     * Represents a DimensionValue resource.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DimensionValue $directorySiteIdDimensionValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('directorySiteIdDimensionValue')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DimensionValue')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DimensionValue $directorySiteIdDimensionValue = null;
    
    /**
     * External ID for this placement.
     * 
     * @var ?string $externalId
     */
	#[\JMS\Serializer\Annotation\SerializedName('externalId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $externalId = null;
    
    /**
     * ID of this placement group. This is a read-only, auto-generated field.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * Represents a DimensionValue resource.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DimensionValue $idDimensionValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('idDimensionValue')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DimensionValue')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DimensionValue $idDimensionValue = null;
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementGroup".
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * Modification timestamp.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo $lastModifiedInfo
     */
	#[\JMS\Serializer\Annotation\SerializedName('lastModifiedInfo')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\LastModifiedInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?LastModifiedInfo $lastModifiedInfo = null;
    
    /**
     * Name of this placement group. This is a required field and must be less than 256 characters long.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Type of this placement group. A package is a simple group of placements that acts as a single pricing point for a group of tags. A roadblock is a group of placements that not only acts as a single pricing point, but also assumes that all the tags in it will be served at the same time. A roadblock requires one of its assigned placements to be marked as primary for reporting. This field is required on insertion.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PlacementGroupPlacementGroupTypeEnum $placementGroupType
     */
	#[\JMS\Serializer\Annotation\SerializedName('placementGroupType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\PlacementGroupPlacementGroupTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PlacementGroupPlacementGroupTypeEnum $placementGroupType = null;
    
    /**
     * ID of the placement strategy assigned to this placement group.
     * 
     * @var ?string $placementStrategyId
     */
	#[\JMS\Serializer\Annotation\SerializedName('placementStrategyId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $placementStrategyId = null;
    
    /**
     * Pricing Schedule
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PricingSchedule $pricingSchedule
     */
	#[\JMS\Serializer\Annotation\SerializedName('pricingSchedule')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PricingSchedule')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PricingSchedule $pricingSchedule = null;
    
    /**
     * ID of the primary placement, used to calculate the media cost of a roadblock (placement group). Modifying this field will automatically modify the primary field on all affected roadblock child placements.
     * 
     * @var ?string $primaryPlacementId
     */
	#[\JMS\Serializer\Annotation\SerializedName('primaryPlacementId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $primaryPlacementId = null;
    
    /**
     * Represents a DimensionValue resource.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DimensionValue $primaryPlacementIdDimensionValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('primaryPlacementIdDimensionValue')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DimensionValue')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DimensionValue $primaryPlacementIdDimensionValue = null;
    
    /**
     * Site ID associated with this placement group. On insert, you must set either this field or the directorySiteId field to specify the site associated with this placement group. This is a required field that is read-only after insertion.
     * 
     * @var ?string $siteId
     */
	#[\JMS\Serializer\Annotation\SerializedName('siteId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $siteId = null;
    
    /**
     * Represents a DimensionValue resource.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DimensionValue $siteIdDimensionValue
     */
	#[\JMS\Serializer\Annotation\SerializedName('siteIdDimensionValue')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DimensionValue')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DimensionValue $siteIdDimensionValue = null;
    
    /**
     * Subaccount ID of this placement group. This is a read-only field that can be left blank.
     * 
     * @var ?string $subaccountId
     */
	#[\JMS\Serializer\Annotation\SerializedName('subaccountId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $subaccountId = null;
    
	public function __construct()
	{
		$this->accountId = null;
		$this->advertiserId = null;
		$this->advertiserIdDimensionValue = null;
		$this->archived = null;
		$this->campaignId = null;
		$this->campaignIdDimensionValue = null;
		$this->childPlacementIds = null;
		$this->comment = null;
		$this->contentCategoryId = null;
		$this->createInfo = null;
		$this->directorySiteId = null;
		$this->directorySiteIdDimensionValue = null;
		$this->externalId = null;
		$this->id = null;
		$this->idDimensionValue = null;
		$this->kind = null;
		$this->lastModifiedInfo = null;
		$this->name = null;
		$this->placementGroupType = null;
		$this->placementStrategyId = null;
		$this->pricingSchedule = null;
		$this->primaryPlacementId = null;
		$this->primaryPlacementIdDimensionValue = null;
		$this->siteId = null;
		$this->siteIdDimensionValue = null;
		$this->subaccountId = null;
	}
}
