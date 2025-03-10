<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * ListPhoneNumberListPhoneNumberResponse - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class ListPhoneNumberListPhoneNumberResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Operations\ListPhoneNumberListPhoneNumberResponseMeta')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ListPhoneNumberListPhoneNumberResponseMeta $meta = null;
    
    /**
     * $phoneNumbers
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ProxyV1ServicePhoneNumber> $phoneNumbers
     */
	#[\JMS\Serializer\Annotation\SerializedName('phone_numbers')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ProxyV1ServicePhoneNumber>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $phoneNumbers = null;
    
	public function __construct()
	{
		$this->meta = null;
		$this->phoneNumbers = null;
	}
}
