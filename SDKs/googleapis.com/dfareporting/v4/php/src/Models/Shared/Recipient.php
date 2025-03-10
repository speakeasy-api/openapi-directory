<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Recipient - Represents a recipient.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Recipient
{
    /**
     * The delivery type for the recipient.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\RecipientDeliveryTypeEnum $deliveryType
     */
	#[\JMS\Serializer\Annotation\SerializedName('deliveryType')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\RecipientDeliveryTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?RecipientDeliveryTypeEnum $deliveryType = null;
    
    /**
     * The email address of the recipient.
     * 
     * @var ?string $email
     */
	#[\JMS\Serializer\Annotation\SerializedName('email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $email = null;
    
    /**
     * The kind of resource this is, in this case dfareporting#recipient.
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
	public function __construct()
	{
		$this->deliveryType = null;
		$this->email = null;
		$this->kind = null;
	}
}
