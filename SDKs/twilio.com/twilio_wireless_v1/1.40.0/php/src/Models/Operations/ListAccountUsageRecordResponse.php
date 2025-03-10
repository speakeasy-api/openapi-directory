<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ListAccountUsageRecordResponse
{
	
    public string $contentType;
    
    /**
     * OK
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ListAccountUsageRecordListAccountUsageRecordResponse $listAccountUsageRecordResponse
     */
	
    public ?ListAccountUsageRecordListAccountUsageRecordResponse $listAccountUsageRecordResponse = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->listAccountUsageRecordResponse = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
