<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * EntityIndividualIdentification - A means of verifying the person's identity.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class EntityIndividualIdentification
{
    /**
     * A method that can be used to verify the individual's identity.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\EntityIndividualIdentificationMethodEnum $method
     */
	#[\JMS\Serializer\Annotation\SerializedName('method')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\EntityIndividualIdentificationMethodEnum>')]
    public EntityIndividualIdentificationMethodEnum $method;
    
    /**
     * The last 4 digits of the identification number that can be used to verify the individual's identity.
     * 
     * @var string $numberLast4
     */
	#[\JMS\Serializer\Annotation\SerializedName('number_last4')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $numberLast4;
    
	public function __construct()
	{
		$this->method = \OpenAPI\OpenAPI\Models\Shared\EntityIndividualIdentificationMethodEnum::SOCIAL_SECURITY_NUMBER;
		$this->numberLast4 = "";
	}
}
