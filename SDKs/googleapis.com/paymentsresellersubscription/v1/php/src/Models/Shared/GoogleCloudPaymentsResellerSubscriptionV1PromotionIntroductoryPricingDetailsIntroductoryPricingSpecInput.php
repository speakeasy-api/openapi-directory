<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput - The duration of an introductory pricing promotion.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecInput
{
    /**
     * Describes the amount unit including the currency code.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Amount $discountAmount
     */
	#[\JMS\Serializer\Annotation\SerializedName('discountAmount')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\GoogleCloudPaymentsResellerSubscriptionV1Amount')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?GoogleCloudPaymentsResellerSubscriptionV1Amount $discountAmount = null;
    
	public function __construct()
	{
		$this->discountAmount = null;
	}
}
