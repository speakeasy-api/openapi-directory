<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * PaymentInitiationPaymentTokenCreateRequest - PaymentInitiationPaymentTokenCreateRequest defines the request schema for `/payment_initiation/payment/token/create`
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class PaymentInitiationPaymentTokenCreateRequest
{
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * 
     * @var ?string $clientId
     */
	#[\JMS\Serializer\Annotation\SerializedName('client_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $clientId = null;
    
    /**
     * The `payment_id` returned from `/payment_initiation/payment/create`.
     * 
     * @var string $paymentId
     */
	#[\JMS\Serializer\Annotation\SerializedName('payment_id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $paymentId;
    
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * 
     * @var ?string $secret
     */
	#[\JMS\Serializer\Annotation\SerializedName('secret')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $secret = null;
    
	public function __construct()
	{
		$this->clientId = null;
		$this->paymentId = "";
		$this->secret = null;
	}
}
