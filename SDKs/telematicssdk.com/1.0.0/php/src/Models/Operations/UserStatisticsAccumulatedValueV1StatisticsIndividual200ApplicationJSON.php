<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSON - Success
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSON
{
    /**
     * $errors
     * 
     * @var ?array<mixed> $errors
     */
	#[\JMS\Serializer\Annotation\SerializedName('Errors')]
    #[\JMS\Serializer\Annotation\Type('array<mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $errors = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Result')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONResult')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONResult $result = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Status')]
    #[\JMS\Serializer\Annotation\Type('float')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?float $status = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('Title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $title = null;
    
	public function __construct()
	{
		$this->errors = null;
		$this->result = null;
		$this->status = null;
		$this->title = null;
	}
}
