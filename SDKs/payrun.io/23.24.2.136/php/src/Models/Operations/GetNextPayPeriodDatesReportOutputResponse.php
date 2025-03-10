<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetNextPayPeriodDatesReportOutputResponse
{
	
    public string $contentType;
    
    /**
     * Bad Request
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorModel $errorModel
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorModel $errorModel = null;
    
    /**
     * The result of the next pay period report execution
     * 
     * @var ?string $getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString
     */
	
    public ?string $getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->errorModel = null;
		$this->getNextPayPeriodDatesReportOutput200ApplicationJSONBinaryString = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
