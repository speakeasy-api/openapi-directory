<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class LiveChatSuperChatDetails
{
    /**
     * A rendered string that displays the fund amount and currency to the user.
     * 
     * @var ?string $amountDisplayString
     */
	#[\JMS\Serializer\Annotation\SerializedName('amountDisplayString')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $amountDisplayString = null;
    
    /**
     * The amount purchased by the user, in micros (1,750,000 micros = 1.75).
     * 
     * @var ?string $amountMicros
     */
	#[\JMS\Serializer\Annotation\SerializedName('amountMicros')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $amountMicros = null;
    
    /**
     * The currency in which the purchase was made.
     * 
     * @var ?string $currency
     */
	#[\JMS\Serializer\Annotation\SerializedName('currency')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $currency = null;
    
    /**
     * The tier in which the amount belongs. Lower amounts belong to lower tiers. The lowest tier is 1.
     * 
     * @var ?int $tier
     */
	#[\JMS\Serializer\Annotation\SerializedName('tier')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $tier = null;
    
    /**
     * The comment added by the user to this Super Chat event.
     * 
     * @var ?string $userComment
     */
	#[\JMS\Serializer\Annotation\SerializedName('userComment')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $userComment = null;
    
	public function __construct()
	{
		$this->amountDisplayString = null;
		$this->amountMicros = null;
		$this->currency = null;
		$this->tier = null;
		$this->userComment = null;
	}
}
