<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class OrderPaymentMethod
{
	#[\JMS\Serializer\Annotation\SerializedName('billingAddress')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OrderAddress')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?OrderAddress $billingAddress = null;
    
    /**
     * The card expiration month (January = 1, February = 2 etc.).
     * 
     * @var ?int $expirationMonth
     */
	#[\JMS\Serializer\Annotation\SerializedName('expirationMonth')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $expirationMonth = null;
    
    /**
     * The card expiration year (4-digit, e.g. 2015).
     * 
     * @var ?int $expirationYear
     */
	#[\JMS\Serializer\Annotation\SerializedName('expirationYear')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $expirationYear = null;
    
    /**
     * The last four digits of the card number.
     * 
     * @var ?string $lastFourDigits
     */
	#[\JMS\Serializer\Annotation\SerializedName('lastFourDigits')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $lastFourDigits = null;
    
    /**
     * The billing phone number.
     * 
     * @var ?string $phoneNumber
     */
	#[\JMS\Serializer\Annotation\SerializedName('phoneNumber')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phoneNumber = null;
    
    /**
     * The type of instrument. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`JCB`" - "`MASTERCARD`" - "`UNIONPAY`" - "`VISA`" - "``" 
     * 
     * @var ?string $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $type = null;
    
	public function __construct()
	{
		$this->billingAddress = null;
		$this->expirationMonth = null;
		$this->expirationYear = null;
		$this->lastFourDigits = null;
		$this->phoneNumber = null;
		$this->type = null;
	}
}
