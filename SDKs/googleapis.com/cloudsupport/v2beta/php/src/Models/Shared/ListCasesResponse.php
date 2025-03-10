<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListCasesResponse - The response message for the ListCases endpoint.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListCasesResponse
{
    /**
     * The list of cases associated with the Google Cloud Resource, after any filters have been applied.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\CaseT> $cases
     */
	#[\JMS\Serializer\Annotation\SerializedName('cases')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\CaseT>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $cases = null;
    
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of the subsequent `ListCasesRequest` message that is issued. If unspecified, there are no more results to retrieve.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
	public function __construct()
	{
		$this->cases = null;
		$this->nextPageToken = null;
	}
}
