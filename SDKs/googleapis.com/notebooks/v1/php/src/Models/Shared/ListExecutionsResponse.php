<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ListExecutionsResponse - Response for listing scheduled notebook executions
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ListExecutionsResponse
{
    /**
     * A list of returned instances.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\Execution> $executions
     */
	#[\JMS\Serializer\Annotation\SerializedName('executions')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\Execution>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $executions = null;
    
    /**
     * Page token that can be used to continue listing from the last result in the next list call.
     * 
     * @var ?string $nextPageToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('nextPageToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $nextPageToken = null;
    
    /**
     * Executions IDs that could not be reached. For example: ['projects/{project_id}/location/{location}/executions/imagenet_test1', 'projects/{project_id}/location/{location}/executions/classifier_train1']
     * 
     * @var ?array<string> $unreachable
     */
	#[\JMS\Serializer\Annotation\SerializedName('unreachable')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $unreachable = null;
    
	public function __construct()
	{
		$this->executions = null;
		$this->nextPageToken = null;
		$this->unreachable = null;
	}
}
