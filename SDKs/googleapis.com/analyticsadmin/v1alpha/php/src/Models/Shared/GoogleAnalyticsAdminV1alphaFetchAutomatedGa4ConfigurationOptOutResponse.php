<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse - Response message for fetching the opt out status for the automated GA4 setup process.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GoogleAnalyticsAdminV1alphaFetchAutomatedGa4ConfigurationOptOutResponse
{
    /**
     * The opt out status for the UA property.
     * 
     * @var ?bool $optOut
     */
	#[\JMS\Serializer\Annotation\SerializedName('optOut')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $optOut = null;
    
	public function __construct()
	{
		$this->optOut = null;
	}
}
