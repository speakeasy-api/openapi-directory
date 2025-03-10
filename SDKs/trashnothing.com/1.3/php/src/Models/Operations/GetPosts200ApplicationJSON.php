<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetPosts200ApplicationJSON - The posts and paging data.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetPosts200ApplicationJSON
{
    /**
     * The index of the last post being returned (an integer between start_index and num_posts).
     * 
     * @var ?int $endIndex
     */
	#[\JMS\Serializer\Annotation\SerializedName('end_index')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $endIndex = null;
    
    /**
     * The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.
     * 
     * 
     * 
     * @var ?array<string> $groupIds
     */
	#[\JMS\Serializer\Annotation\SerializedName('group_ids')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $groupIds = null;
    
    /**
     * The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.
     * 
     * 
     * 
     * @var ?\DateTime $lastListingsView
     */
	#[\JMS\Serializer\Annotation\SerializedName('last_listings_view')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $lastListingsView = null;
    
    /**
     * The total number of pages available.
     * 
     * @var ?int $numPages
     */
	#[\JMS\Serializer\Annotation\SerializedName('num_pages')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $numPages = null;
    
    /**
     * The total number of posts available.
     * 
     * @var ?int $numPosts
     */
	#[\JMS\Serializer\Annotation\SerializedName('num_posts')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $numPosts = null;
    
    /**
     * The page number of the posts being returned.
     * 
     * @var ?int $page
     */
	#[\JMS\Serializer\Annotation\SerializedName('page')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $page = null;
    
    /**
     * The number of posts being returned per page.
     * 
     * @var ?int $perPage
     */
	#[\JMS\Serializer\Annotation\SerializedName('per_page')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $perPage = null;
    
    /**
     * $posts
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Post> $posts
     */
	#[\JMS\Serializer\Annotation\SerializedName('posts')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Post>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $posts = null;
    
    /**
     * The index of the first post being returned (an integer between 1 and num_posts).
     * 
     * @var ?int $startIndex
     */
	#[\JMS\Serializer\Annotation\SerializedName('start_index')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $startIndex = null;
    
	public function __construct()
	{
		$this->endIndex = null;
		$this->groupIds = null;
		$this->lastListingsView = null;
		$this->numPages = null;
		$this->numPosts = null;
		$this->page = null;
		$this->perPage = null;
		$this->posts = null;
		$this->startIndex = null;
	}
}
