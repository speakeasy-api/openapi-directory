<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UpdateMessengerAccount400ApplicationJSON - Bad Request.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UpdateMessengerAccount400ApplicationJSON
{
	#[\JMS\Serializer\Annotation\SerializedName('detail')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $detail = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('instance')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $instance = null;
    
    /**
     * $invalidParams
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\UpdateMessengerAccount400ApplicationJSONInvalidParams> $invalidParams
     */
	#[\JMS\Serializer\Annotation\SerializedName('invalid_params')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\UpdateMessengerAccount400ApplicationJSONInvalidParams>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $invalidParams = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $title = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $type = null;
    
	public function __construct()
	{
		$this->detail = null;
		$this->instance = null;
		$this->invalidParams = null;
		$this->title = null;
		$this->type = null;
	}
}
