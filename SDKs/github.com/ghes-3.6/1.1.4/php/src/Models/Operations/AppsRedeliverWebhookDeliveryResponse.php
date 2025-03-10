<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class AppsRedeliverWebhookDeliveryResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Accepted
     * 
     * @var ?array<string, mixed> $appsRedeliverWebhookDelivery202ApplicationJSONObject
     */
	
    public ?array $appsRedeliverWebhookDelivery202ApplicationJSONObject = null;
    
    /**
     * Bad Request
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError = null;
    
    /**
     * Bad Request
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ScimError $scimError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ScimError $scimError = null;
    
    /**
     * Validation failed, or the endpoint has been spammed.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ValidationError $validationError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ValidationError $validationError = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->appsRedeliverWebhookDelivery202ApplicationJSONObject = null;
		$this->basicError = null;
		$this->scimError = null;
		$this->validationError = null;
	}
}
