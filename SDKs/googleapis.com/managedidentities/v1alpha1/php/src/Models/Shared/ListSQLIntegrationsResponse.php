<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListSQLIntegrationsResponse - ListSQLIntegrationsResponse is the response message for ListSQLIntegrations method.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListSQLIntegrationsResponse
{
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
    /**
     * A list of SQLIntegrations of a domain.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\SQLIntegration> $sqlIntegrations
     */
	#[\JMS\Serializer\Annotation\SerializedName('sqlIntegrations')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\SQLIntegration>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $sqlIntegrations = null;
    
    /**
     * A list of locations that could not be reached.
     * 
     * @var ?array<string> $unreachable
     */
	#[\JMS\Serializer\Annotation\SerializedName('unreachable')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $unreachable = null;
    
	public function __construct()
	{
		$this->nextPageToken = null;
		$this->sqlIntegrations = null;
		$this->unreachable = null;
	}
}
