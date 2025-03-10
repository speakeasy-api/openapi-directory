<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * OrderRoundingAdjustment - A rounding adjustment of the money being returned. Commonly used to apply cash rounding
 * 
 * when the minimum unit of the account is smaller than the lowest physical denomination of the currency.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class OrderRoundingAdjustment
{
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * 
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Money $amountMoney
     */
	#[\JMS\Serializer\Annotation\SerializedName('amount_money')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Money')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Money $amountMoney = null;
    
    /**
     * The name of the rounding adjustment from the original sale order.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * A unique ID that identifies the rounding adjustment only within this order.
     * 
     * @var ?string $uid
     */
	#[\JMS\Serializer\Annotation\SerializedName('uid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uid = null;
    
	public function __construct()
	{
		$this->amountMoney = null;
		$this->name = null;
		$this->uid = null;
	}
}
