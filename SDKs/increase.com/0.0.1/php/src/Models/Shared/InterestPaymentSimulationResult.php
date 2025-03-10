<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * InterestPaymentSimulationResult - The results of an Interest Payment simulation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class InterestPaymentSimulationResult
{
    /**
     * This will contain the resulting [Transaction](#transactions) object. The Transaction's `source` will be of `category: interest_payment`.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\InterestPaymentSimulationResultTransaction $transaction
     */
	#[\JMS\Serializer\Annotation\SerializedName('transaction')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\InterestPaymentSimulationResultTransaction')]
    public InterestPaymentSimulationResultTransaction $transaction;
    
    /**
     * A constant representing the object's type. For this resource it will always be `interest_payment_simulation_result`.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\InterestPaymentSimulationResultTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\InterestPaymentSimulationResultTypeEnum>')]
    public InterestPaymentSimulationResultTypeEnum $type;
    
	public function __construct()
	{
		$this->transaction = new \OpenAPI\OpenAPI\Models\Shared\InterestPaymentSimulationResultTransaction();
		$this->type = \OpenAPI\OpenAPI\Models\Shared\InterestPaymentSimulationResultTypeEnum::INTEREST_PAYMENT_SIMULATION_RESULT;
	}
}
