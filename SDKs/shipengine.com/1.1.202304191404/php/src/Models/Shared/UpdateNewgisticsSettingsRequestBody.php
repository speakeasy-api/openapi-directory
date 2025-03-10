<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * UpdateNewgisticsSettingsRequestBody - A newgistics account settings request body
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class UpdateNewgisticsSettingsRequestBody
{
	#[\JMS\Serializer\Annotation\SerializedName('include_barcode_with_order_number')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $includeBarcodeWithOrderNumber = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('receive_email_on_manifest_processing')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $receiveEmailOnManifestProcessing = null;
    
	public function __construct()
	{
		$this->includeBarcodeWithOrderNumber = null;
		$this->receiveEmailOnManifestProcessing = null;
	}
}
