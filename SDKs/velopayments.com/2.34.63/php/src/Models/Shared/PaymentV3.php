<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PaymentV3
{
    /**
     * The amount of the payment in minor units
     * 
     * @var ?int $amount
     */
	#[\JMS\Serializer\Annotation\SerializedName('amount')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $amount = null;
    
    /**
     * Populated only if the payment was automatically withdrawn during instruction for being invalid
     * 
     * @var ?string $autoWithdrawnReasonCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('autoWithdrawnReasonCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $autoWithdrawnReasonCode = null;
    
    /**
     * The currency that the payment was made in
     * 
     * @var ?string $currency
     */
	#[\JMS\Serializer\Annotation\SerializedName('currency')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $currency = null;
    
    /**
     * Payee data associated with a payment. Either individual or company must be populated
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PayoutPayeeV3 $payee
     */
	#[\JMS\Serializer\Annotation\SerializedName('payee')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PayoutPayeeV3')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PayoutPayeeV3 $payee = null;
    
    /**
     * The id of the payment
     * 
     * @var string $paymentId
     */
	#[\JMS\Serializer\Annotation\SerializedName('paymentId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $paymentId;
    
    /**
     * <p>Any value here will override the memo value in the parent payout</p>
     * 
     * <p>This should be the reference field on the statement seen by the payee (but not via ACH)</p>
     * 
     * 
     * @var ?string $paymentMemo
     */
	#[\JMS\Serializer\Annotation\SerializedName('paymentMemo')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $paymentMemo = null;
    
    /**
     * <p>Metadata about the payment that may be relevant to the specific rails or remote system making the payout</p>
     * 
     * <p>The structure of the data will be dictated by the requirements of the payment rails</p>
     * 
     * 
     * @var ?string $paymentMetadata
     */
	#[\JMS\Serializer\Annotation\SerializedName('paymentMetadata')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $paymentMetadata = null;
    
    /**
     * A reference identifier for the payor for the given payee payment
     * 
     * @var ?string $payorPaymentId
     */
	#[\JMS\Serializer\Annotation\SerializedName('payorPaymentId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $payorPaymentId = null;
    
    /**
     * Indicates the 3rd party system involved in making this payment
     * 
     * @var ?string $railsId
     */
	#[\JMS\Serializer\Annotation\SerializedName('railsId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $railsId = null;
    
    /**
     * The remoteId supplied by the payor that identifies the payee
     * 
     * @var ?string $remoteId
     */
	#[\JMS\Serializer\Annotation\SerializedName('remoteId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $remoteId = null;
    
    /**
     * <p>The identifier for the remote payments system if not Velo</p>
     * 
     * 
     * 
     * @var ?string $remoteSystemId
     */
	#[\JMS\Serializer\Annotation\SerializedName('remoteSystemId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $remoteSystemId = null;
    
    /**
     * The identifier of the source account to debit the payment from
     * 
     * @var ?string $sourceAccountName
     */
	#[\JMS\Serializer\Annotation\SerializedName('sourceAccountName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sourceAccountName = null;
    
    /**
     * Current status of payment. One of the following values: SUBMITTED, ACCEPTED, REJECTED, WITHDRAWN, RETURNED, AWAITING_FUNDS, FUNDED, UNFUNDED, CANCELLED, BANK_PAYMENT_REQUESTED
     * 
     * @var ?string $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $status = null;
    
    /**
     * The transmission method of the payment. One of the following values: ACH, SAME_DAY_ACH, WIRE, LOCAL, SWIFT
     * 
     * @var ?string $transmissionType
     */
	#[\JMS\Serializer\Annotation\SerializedName('transmissionType')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $transmissionType = null;
    
    /**
     * Can this paynent be withdrawn
     * 
     * @var ?bool $withdrawable
     */
	#[\JMS\Serializer\Annotation\SerializedName('withdrawable')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $withdrawable = null;
    
	public function __construct()
	{
		$this->amount = null;
		$this->autoWithdrawnReasonCode = null;
		$this->currency = null;
		$this->payee = null;
		$this->paymentId = "";
		$this->paymentMemo = null;
		$this->paymentMetadata = null;
		$this->payorPaymentId = null;
		$this->railsId = null;
		$this->remoteId = null;
		$this->remoteSystemId = null;
		$this->sourceAccountName = null;
		$this->status = null;
		$this->transmissionType = null;
		$this->withdrawable = null;
	}
}
