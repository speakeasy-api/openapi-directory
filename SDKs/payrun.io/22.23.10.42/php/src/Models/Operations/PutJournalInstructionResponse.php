<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class PutJournalInstructionResponse
{
	
    public string $contentType;
    
    /**
     * Bad Request
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ErrorModel $errorModel
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ErrorModel $errorModel = null;
    
    /**
     * The journal instruction object.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\JournalInstruction $journalInstruction
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\JournalInstruction $journalInstruction = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->errorModel = null;
		$this->journalInstruction = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
