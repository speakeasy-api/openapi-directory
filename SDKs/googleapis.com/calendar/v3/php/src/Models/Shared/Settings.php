<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * Settings - Successful response
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class Settings
{
    /**
     * Etag of the collection.
     * 
     * @var ?string $etag
     */
	#[\JMS\Serializer\Annotation\SerializedName('etag')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $etag = null;
    
    /**
     * List of user settings.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Setting> $items
     */
	#[\JMS\Serializer\Annotation\SerializedName('items')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Setting>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $items = null;
    
    /**
     * Type of the collection ("calendar#settings").
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
    /**
     * Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided.
     * 
     * @var ?string $nextSyncToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextSyncToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextSyncToken = null;
    
	public function __construct()
	{
		$this->etag = null;
		$this->items = null;
		$this->kind = null;
		$this->nextPageToken = null;
		$this->nextSyncToken = null;
	}
}
