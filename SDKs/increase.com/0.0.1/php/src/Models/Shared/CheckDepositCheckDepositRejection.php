<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CheckDepositCheckDepositRejection - If your deposit is rejected by Increase, this will contain details as to why it was rejected.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CheckDepositCheckDepositRejection
{
    /**
     * The rejected amount in the minor unit of check's currency. For dollars, for example, this is cents.
     * 
     * @var int $amount
     */
	#[\JMS\Serializer\Annotation\SerializedName('amount')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $amount;
    
    /**
     * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code for the check's currency.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\CheckDepositCheckDepositRejectionCurrencyEnum $currency
     */
	#[\JMS\Serializer\Annotation\SerializedName('currency')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CheckDepositCheckDepositRejectionCurrencyEnum>')]
    public CheckDepositCheckDepositRejectionCurrencyEnum $currency;
    
    /**
     * Why the check deposit was rejected.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\CheckDepositCheckDepositRejectionReasonEnum $reason
     */
	#[\JMS\Serializer\Annotation\SerializedName('reason')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CheckDepositCheckDepositRejectionReasonEnum>')]
    public CheckDepositCheckDepositRejectionReasonEnum $reason;
    
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time at which the check deposit was rejected.
     * 
     * @var \DateTime $rejectedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('rejected_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    public \DateTime $rejectedAt;
    
	public function __construct()
	{
		$this->amount = 0;
		$this->currency = \OpenAPI\OpenAPI\Models\Shared\CheckDepositCheckDepositRejectionCurrencyEnum::CAD;
		$this->reason = \OpenAPI\OpenAPI\Models\Shared\CheckDepositCheckDepositRejectionReasonEnum::INCOMPLETE_IMAGE;
		$this->rejectedAt = new \DateTime();
	}
}
