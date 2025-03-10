<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * StructuredServiceItem - Represents a structured service offered by the merchant. For eg: toilet_installation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class StructuredServiceItem
{
    /**
     * Optional. Description of structured service item. The character limit is 300.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceType`. This information is provided by `BatchGetCategories` rpc service.
     * 
     * @var ?string $serviceTypeId
     */
	#[\JMS\Serializer\Annotation\SerializedName('serviceTypeId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceTypeId = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->serviceTypeId = null;
	}
}
