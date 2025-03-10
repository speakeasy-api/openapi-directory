<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class OrdersCustomBatchRequestEntryReturnRefundLineItem
{
	#[\JMS\Serializer\Annotation\SerializedName('amountPretax')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Price')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Price $amountPretax = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('amountTax')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Price')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Price $amountTax = null;
    
    /**
     * The ID of the line item to return. Either lineItemId or productId is required.
     * 
     * @var ?string $lineItemId
     */
	#[\JMS\Serializer\Annotation\SerializedName('lineItemId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $lineItemId = null;
    
    /**
     * The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.
     * 
     * @var ?string $productId
     */
	#[\JMS\Serializer\Annotation\SerializedName('productId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $productId = null;
    
    /**
     * The quantity to return and refund.
     * 
     * @var ?int $quantity
     */
	#[\JMS\Serializer\Annotation\SerializedName('quantity')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $quantity = null;
    
    /**
     * The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" 
     * 
     * @var ?string $reason
     */
	#[\JMS\Serializer\Annotation\SerializedName('reason')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $reason = null;
    
    /**
     * The explanation of the reason.
     * 
     * @var ?string $reasonText
     */
	#[\JMS\Serializer\Annotation\SerializedName('reasonText')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $reasonText = null;
    
	public function __construct()
	{
		$this->amountPretax = null;
		$this->amountTax = null;
		$this->lineItemId = null;
		$this->productId = null;
		$this->quantity = null;
		$this->reason = null;
		$this->reasonText = null;
	}
}
