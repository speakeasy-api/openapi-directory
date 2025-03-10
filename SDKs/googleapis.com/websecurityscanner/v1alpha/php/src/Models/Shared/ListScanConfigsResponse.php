<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListScanConfigsResponse - Response for the `ListScanConfigs` method.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListScanConfigsResponse
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
     * The list of ScanConfigs returned.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ScanConfig> $scanConfigs
     */
	#[\JMS\Serializer\Annotation\SerializedName('scanConfigs')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ScanConfig>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $scanConfigs = null;
    
	public function __construct()
	{
		$this->nextPageToken = null;
		$this->scanConfigs = null;
	}
}
