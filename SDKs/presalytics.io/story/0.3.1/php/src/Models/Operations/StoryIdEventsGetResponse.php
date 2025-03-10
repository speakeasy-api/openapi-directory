<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class StoryIdEventsGetResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * An Array of events
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Event> $events
     */
	
    public ?array $events = null;
    
    /**
     * Unauthorized
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\ProblemDetail $problemDetail
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\ProblemDetail $problemDetail = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->events = null;
		$this->problemDetail = null;
	}
}
