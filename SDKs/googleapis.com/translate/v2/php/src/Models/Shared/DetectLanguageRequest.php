<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * DetectLanguageRequest - The request message for language detection.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class DetectLanguageRequest
{
    /**
     * The input text upon which to perform language detection. Repeat this
     * 
     * parameter to perform language detection on multiple text inputs.
     * 
     * @var ?array<string> $q
     */
	#[\JMS\Serializer\Annotation\SerializedName('q')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $q = null;
    
	public function __construct()
	{
		$this->q = null;
	}
}
