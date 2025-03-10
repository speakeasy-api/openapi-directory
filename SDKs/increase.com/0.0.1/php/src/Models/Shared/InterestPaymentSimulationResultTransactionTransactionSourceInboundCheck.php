<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InterestPaymentSimulationResultTransactionTransactionSourceInboundCheck - A Inbound Check object. This field will be present in the JSON response if and only if `category` is equal to `inbound_check`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InterestPaymentSimulationResultTransactionTransactionSourceInboundCheck
{
    /**
     * The amount in the minor unit of the destination account currency. For dollars, for example, this is cents.
     * 
     * @var int $amount
     */
	#[\JMS\Serializer\Annotation\SerializedName('amount')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $amount;
    
	#[\JMS\Serializer\Annotation\SerializedName('check_front_image_file_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $checkFrontImageFileId;
    
	#[\JMS\Serializer\Annotation\SerializedName('check_number')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $checkNumber;
    
	#[\JMS\Serializer\Annotation\SerializedName('check_rear_image_file_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $checkRearImageFileId;
    
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the transaction's currency.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\InterestPaymentSimulationResultTransactionTransactionSourceInboundCheckCurrencyEnum $currency
     */
	#[\JMS\Serializer\Annotation\SerializedName('currency')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\InterestPaymentSimulationResultTransactionTransactionSourceInboundCheckCurrencyEnum>')]
    public InterestPaymentSimulationResultTransactionTransactionSourceInboundCheckCurrencyEnum $currency;
    
	public function __construct()
	{
		$this->amount = 0;
		$this->checkFrontImageFileId = "";
		$this->checkNumber = "";
		$this->checkRearImageFileId = "";
		$this->currency = \OpenAPI\OpenAPI\Models\Shared\InterestPaymentSimulationResultTransactionTransactionSourceInboundCheckCurrencyEnum::CAD;
	}
}
