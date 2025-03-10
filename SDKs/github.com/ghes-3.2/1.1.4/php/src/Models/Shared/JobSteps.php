<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class JobSteps
{
    /**
     * The time that the job finished, in ISO 8601 format.
     * 
     * @var ?\DateTime $completedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('completed_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $completedAt = null;
    
    /**
     * The outcome of the job.
     * 
     * @var string $conclusion
     */
	#[\JMS\Serializer\Annotation\SerializedName('conclusion')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $conclusion;
    
    /**
     * The name of the job.
     * 
     * @var string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $name;
    
	#[\JMS\Serializer\Annotation\SerializedName('number')]
    #[\JMS\Serializer\Annotation\Type('int')]
    public int $number;
    
    /**
     * The time that the step started, in ISO 8601 format.
     * 
     * @var ?\DateTime $startedAt
     */
	#[\JMS\Serializer\Annotation\SerializedName('started_at')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $startedAt = null;
    
    /**
     * The phase of the lifecycle that the job is currently in.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\JobStepsStatusEnum $status
     */
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\JobStepsStatusEnum>')]
    public JobStepsStatusEnum $status;
    
	public function __construct()
	{
		$this->completedAt = null;
		$this->conclusion = "";
		$this->name = "";
		$this->number = 0;
		$this->startedAt = null;
		$this->status = \OpenAPI\OpenAPI\Models\Shared\JobStepsStatusEnum::QUEUED;
	}
}
