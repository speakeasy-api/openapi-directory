<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TipSettings
{
    /**
     * Indicates whether tipping is enabled for this checkout. Defaults to false.
     * 
     * @var ?bool $allowTipping
     */
	#[\JMS\Serializer\Annotation\SerializedName('allow_tipping')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $allowTipping = null;
    
    /**
     * Indicates whether custom tip amounts are allowed during the checkout flow. Defaults to false.
     * 
     * @var ?bool $customTipField
     */
	#[\JMS\Serializer\Annotation\SerializedName('custom_tip_field')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $customTipField = null;
    
    /**
     * Indicates whether tip options should be presented on the screen before presenting
     * 
     * the signature screen during card payment. Defaults to false.
     * 
     * @var ?bool $separateTipScreen
     */
	#[\JMS\Serializer\Annotation\SerializedName('separate_tip_screen')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $separateTipScreen = null;
    
    /**
     * Enables the "Smart Tip Amounts" behavior.
     * 
     * Exact tipping options depend on the region in which the Square seller is active.
     * 
     * For payments under 10.00, in the Australia, Canada, Ireland, United Kingdom, and United States, tipping options are presented as no tip, .50, 1.00 or 2.00.
     * 
     * For payment amounts of 10.00 or greater, tipping options are presented as the following percentages: 0%, 5%, 10%, 15%.
     * 
     * If set to true, the `tip_percentages` settings is ignored.
     * Defaults to false.
     * 
     * To learn more about smart tipping, see [Accept Tips with the Square App](https://squareup.com/help/us/en/article/5069-accept-tips-with-the-square-app).
     * 
     * @var ?bool $smartTipping
     */
	#[\JMS\Serializer\Annotation\SerializedName('smart_tipping')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $smartTipping = null;
    
    /**
     * A list of tip percentages that should be presented during the checkout flow, specified as
     * 
     * up to 3 non-negative integers from 0 to 100 (inclusive). Defaults to 15, 20, and 25.
     * 
     * @var ?array<int> $tipPercentages
     */
	#[\JMS\Serializer\Annotation\SerializedName('tip_percentages')]
    #[\JMS\Serializer\Annotation\Type('array<int>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tipPercentages = null;
    
	public function __construct()
	{
		$this->allowTipping = null;
		$this->customTipField = null;
		$this->separateTipScreen = null;
		$this->smartTipping = null;
		$this->tipPercentages = null;
	}
}
