<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * CloneOrganization201ApplicationJSON - Successful operation
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class CloneOrganization201ApplicationJSON
{
    /**
     * API related settings
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CloneOrganization201ApplicationJSONApi $api
     */
	#[\JMS\Serializer\Annotation\SerializedName('api')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\CloneOrganization201ApplicationJSONApi')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CloneOrganization201ApplicationJSONApi $api = null;
    
    /**
     * Data for this organization
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CloneOrganization201ApplicationJSONCloud $cloud
     */
	#[\JMS\Serializer\Annotation\SerializedName('cloud')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\CloneOrganization201ApplicationJSONCloud')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CloneOrganization201ApplicationJSONCloud $cloud = null;
    
    /**
     * Organization ID
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * Licensing related settings
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CloneOrganization201ApplicationJSONLicensing $licensing
     */
	#[\JMS\Serializer\Annotation\SerializedName('licensing')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\CloneOrganization201ApplicationJSONLicensing')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CloneOrganization201ApplicationJSONLicensing $licensing = null;
    
    /**
     * Information about the organization's management system
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CloneOrganization201ApplicationJSONManagement $management
     */
	#[\JMS\Serializer\Annotation\SerializedName('management')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\CloneOrganization201ApplicationJSONManagement')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CloneOrganization201ApplicationJSONManagement $management = null;
    
    /**
     * Organization name
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Organization URL
     * 
     * @var ?string $url
     */
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->api = null;
		$this->cloud = null;
		$this->id = null;
		$this->licensing = null;
		$this->management = null;
		$this->name = null;
		$this->url = null;
	}
}
