<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * OBWriteInternationalScheduledResponse6DataCharges - Set of elements used to provide details of a charge for the payment initiation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class OBWriteInternationalScheduledResponse6DataCharges
{
    /**
     * Amount of money associated with the charge type.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\OBActiveOrHistoricCurrencyAndAmount $amount
     */
	#[\JMS\Serializer\Annotation\SerializedName('Amount')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OBActiveOrHistoricCurrencyAndAmount')]
    public OBActiveOrHistoricCurrencyAndAmount $amount;
    
    /**
     * Specifies which party/parties will bear the charges associated with the processing of the payment transaction.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\OBChargeBearerType1CodeEnum $chargeBearer
     */
	#[\JMS\Serializer\Annotation\SerializedName('ChargeBearer')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\OBChargeBearerType1CodeEnum>')]
    public OBChargeBearerType1CodeEnum $chargeBearer;
    
    /**
     * Charge type, in a coded form.
     * 
     * @var string $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('Type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $type;
    
	public function __construct()
	{
		$this->amount = new \OpenAPI\OpenAPI\Models\Shared\OBActiveOrHistoricCurrencyAndAmount();
		$this->chargeBearer = \OpenAPI\OpenAPI\Models\Shared\OBChargeBearerType1CodeEnum::BORNE_BY_CREDITOR;
		$this->type = "";
	}
}
