<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class AppsListInstallationReposForAuthenticatedUserResponse
{
	
    public string $contentType;
    
    /**
     * $headers
     * 
     * @var ?array<string, array<string>> $headers
     */
	
    public ?array $headers = null;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
    /**
     * The access the user has to each repository is included in the hash under the `permissions` key.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\AppsListInstallationReposForAuthenticatedUser200ApplicationJSON $appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject
     */
	
    public ?AppsListInstallationReposForAuthenticatedUser200ApplicationJSON $appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject = null;
    
    /**
     * Forbidden
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\BasicError $basicError = null;
    
	public function __construct()
	{
		$this->contentType = "";
		$this->headers = null;
		$this->statusCode = 0;
		$this->rawResponse = null;
		$this->appsListInstallationReposForAuthenticatedUser200ApplicationJSONObject = null;
		$this->basicError = null;
	}
}
