<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class MessageStatusWhatsAppUsage
{
    /**
     * The charge currency in ISO 4217 format.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\MessageStatusWhatsAppUsageCurrencyEnum $currency
     */
	#[\JMS\Serializer\Annotation\SerializedName('currency')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\MessageStatusWhatsAppUsageCurrencyEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?MessageStatusWhatsAppUsageCurrencyEnum $currency = null;
    
    /**
     * The charge amount as a stringified number. For WhatsApp this is the default Vonage charge per conversation.
     * 
     * @var ?string $price
     */
	#[\JMS\Serializer\Annotation\SerializedName('price')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $price = null;
    
	public function __construct()
	{
		$this->currency = null;
		$this->price = null;
	}
}
