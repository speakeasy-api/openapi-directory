<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GooglePrivacyDlpV2StorageMetadataLabel - Storage metadata label to indicate which metadata entry contains findings.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GooglePrivacyDlpV2StorageMetadataLabel
{
	#[\JMS\Serializer\Annotation\SerializedName('key')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $key = null;
    
	public function __construct()
	{
		$this->key = null;
	}
}
