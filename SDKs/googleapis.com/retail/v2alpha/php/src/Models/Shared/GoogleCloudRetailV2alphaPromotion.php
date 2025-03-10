<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleCloudRetailV2alphaPromotion - Promotion specification.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleCloudRetailV2alphaPromotion
{
    /**
     * Promotion identifier, which is the final component of name. For example, this field is "free_gift", if name is `projects/* /locations/global/catalogs/default_catalog/promotions/free_gift`. The value must be a UTF-8 encoded string with a length limit of 128 characters, and match the pattern: `a-zA-Z*`. For example, id0LikeThis or ID_1_LIKE_THIS. Otherwise, an INVALID_ARGUMENT error is returned. Corresponds to Google Merchant Center property [promotion_id](https://support.google.com/merchants/answer/7050148).
     * 
     * @var ?string $promotionId
     */
	#[\JMS\Serializer\Annotation\SerializedName('promotionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $promotionId = null;
    
	public function __construct()
	{
		$this->promotionId = null;
	}
}
