<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class Job
{
	#[\JMS\Serializer\Annotation\SerializedName('configuration')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\JobConfiguration')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?JobConfiguration $configuration = null;
    
    /**
     * [Output-only] A hash of this resource.
     * 
     * @var ?string $etag
     */
	#[\JMS\Serializer\Annotation\SerializedName('etag')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $etag = null;
    
    /**
     * [Output-only] Opaque ID field of the job
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('jobReference')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\JobReference')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?JobReference $jobReference = null;
    
    /**
     * [Output-only] The type of the resource.
     * 
     * @var ?string $kind
     */
	#[\JMS\Serializer\Annotation\SerializedName('kind')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kind = null;
    
    /**
     * [Output-only] A URL that can be used to access this resource again.
     * 
     * @var ?string $selfLink
     */
	#[\JMS\Serializer\Annotation\SerializedName('selfLink')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $selfLink = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('statistics')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\JobStatistics')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?JobStatistics $statistics = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\JobStatus')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?JobStatus $status = null;
    
    /**
     * [Output-only] Email address of the user who ran the job.
     * 
     * @var ?string $userEmail
     */
	#[\JMS\Serializer\Annotation\SerializedName('user_email')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $userEmail = null;
    
	public function __construct()
	{
		$this->configuration = null;
		$this->etag = null;
		$this->id = null;
		$this->jobReference = null;
		$this->kind = null;
		$this->selfLink = null;
		$this->statistics = null;
		$this->status = null;
		$this->userEmail = null;
	}
}
