<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Category - A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Category
{
    /**
     * Output only. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set.
     * 
     * @var ?string $displayName
     */
	#[\JMS\Serializer\Annotation\SerializedName('displayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
    /**
     * Output only. More hours types that are available for this business category.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\MoreHoursType> $moreHoursTypes
     */
	#[\JMS\Serializer\Annotation\SerializedName('moreHoursTypes')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\MoreHoursType>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $moreHoursTypes = null;
    
    /**
     * Required. A stable ID (provided by Google) for this category. The value must be specified when modifying the category (when creating or updating a location).
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Output only. A list of all the service types that are available for this business category.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ServiceType> $serviceTypes
     */
	#[\JMS\Serializer\Annotation\SerializedName('serviceTypes')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ServiceType>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $serviceTypes = null;
    
	public function __construct()
	{
		$this->displayName = null;
		$this->moreHoursTypes = null;
		$this->name = null;
		$this->serviceTypes = null;
	}
}
