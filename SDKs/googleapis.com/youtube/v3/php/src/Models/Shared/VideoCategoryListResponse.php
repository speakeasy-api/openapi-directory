<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * VideoCategoryListResponse - Successful response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class VideoCategoryListResponse
{
    /**
     * Etag of this resource.
     * 
     * @var ?string $etag
     */
	#[\JMS\Serializer\Annotation\SerializedName('etag')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $etag = null;
    
    /**
     * Serialized EventId of the request which produced this response.
     * 
     * @var ?string $eventId
     */
	#[\JMS\Serializer\Annotation\SerializedName('eventId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $eventId = null;
    
    /**
     * A list of video categories that can be associated with YouTube videos. In this map, the video category ID is the map key, and its value is the corresponding videoCategory resource.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\VideoCategory> $items
     */
	#[\JMS\Serializer\Annotation\SerializedName('items')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\VideoCategory>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $items = null;
    
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#videoCategoryListResponse".
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the next page in the result set.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
    /**
     * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\PageInfo $pageInfo
     */
	#[\JMS\Serializer\Annotation\SerializedName('pageInfo')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PageInfo')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?PageInfo $pageInfo = null;
    
    /**
     * The token that can be used as the value of the pageToken parameter to retrieve the previous page in the result set.
     * 
     * @var ?string $prevPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('prevPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $prevPageToken = null;
    
    /**
     * Stub token pagination template to suppress results.
     * 
     * @var ?array<string, mixed> $tokenPagination
     */
	#[\JMS\Serializer\Annotation\SerializedName('tokenPagination')]
    #[\JMS\Serializer\Annotation\Type('array<string, mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tokenPagination = null;
    
    /**
     * The visitorId identifies the visitor.
     * 
     * @var ?string $visitorId
     */
	#[\JMS\Serializer\Annotation\SerializedName('visitorId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $visitorId = null;
    
	public function __construct()
	{
		$this->etag = null;
		$this->eventId = null;
		$this->items = null;
		$this->kind = null;
		$this->nextPageToken = null;
		$this->pageInfo = null;
		$this->prevPageToken = null;
		$this->tokenPagination = null;
		$this->visitorId = null;
	}
}
