<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListCoursesResponse - Response when listing courses.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListCoursesResponse
{
    /**
     * Courses that match the list request.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Course> $courses
     */
	#[\JMS\Serializer\Annotation\SerializedName('courses')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Course>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $courses = null;
    
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
	public function __construct()
	{
		$this->courses = null;
		$this->nextPageToken = null;
	}
}
