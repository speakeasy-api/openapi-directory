<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetWarehouseByIdResponseBody - A warehouse
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetWarehouseByIdResponseBody
{
    /**
     * Timestamp that indicates when the warehouse was created
     * 
     * @var \DateTime $createdAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('created_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $createdAt;
    
    /**
     * Designates which single warehouse is the default on the account
     * 
     * @var ?bool $isDefault
     */
	#[\JMS\Serializer\Annotation\SerializedName('is_default')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $isDefault = null;
    
    /**
     * Name of the warehouse
     * 
     * @var string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
    /**
     * The origin address of the warehouse
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\Address $originAddress
     */
	#[\JMS\Serializer\Annotation\SerializedName('origin_address')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Address')]
    public Address $originAddress;
    
    /**
     * The return address associated with the warehouse
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\Address $returnAddress
     */
	#[\JMS\Serializer\Annotation\SerializedName('return_address')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Address')]
    public Address $returnAddress;
    
    /**
     * A string that uniquely identifies the warehouse
     * 
     * @var string $warehouseId
     */
	#[\JMS\Serializer\Annotation\SerializedName('warehouse_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $warehouseId;
    
	public function __construct()
	{
		$this->createdAt = new \DateTime();
		$this->isDefault = null;
		$this->name = "";
		$this->originAddress = new \OpenAPI\OpenAPI\Models\Shared\Address();
		$this->returnAddress = new \OpenAPI\OpenAPI\Models\Shared\Address();
		$this->warehouseId = "";
	}
}
