<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class ActionsListSelectedReposForOrgSecretResponse
{
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * Response
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\ActionsListSelectedReposForOrgSecret200ApplicationJSON $actionsListSelectedReposForOrgSecret200ApplicationJSONObject
     */
	
    public ?ActionsListSelectedReposForOrgSecret200ApplicationJSON $actionsListSelectedReposForOrgSecret200ApplicationJSONObject = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->actionsListSelectedReposForOrgSecret200ApplicationJSONObject = null;
	}
}
