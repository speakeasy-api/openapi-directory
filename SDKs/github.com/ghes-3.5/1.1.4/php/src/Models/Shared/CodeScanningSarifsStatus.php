<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CodeScanningSarifsStatus - Response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CodeScanningSarifsStatus
{
    /**
     * The REST API URL for getting the analyses associated with the upload.
     * 
     * @var ?string $analysesUrl
     */
	#[\JMS\Serializer\Annotation\SerializedName('analyses_url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $analysesUrl = null;
    
    /**
     * Any errors that ocurred during processing of the delivery.
     * 
     * @var ?array<string> $errors
     */
	#[\JMS\Serializer\Annotation\SerializedName('errors')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $errors = null;
    
    /**
     * `pending` files have not yet been processed, while `complete` means results from the SARIF have been stored. `failed` files have either not been processed at all, or could only be partially processed.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CodeScanningSarifsStatusProcessingStatusEnum $processingStatus
     */
	#[\JMS\Serializer\Annotation\SerializedName('processing_status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CodeScanningSarifsStatusProcessingStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CodeScanningSarifsStatusProcessingStatusEnum $processingStatus = null;
    
	public function __construct()
	{
		$this->analysesUrl = null;
		$this->errors = null;
		$this->processingStatus = null;
	}
}
