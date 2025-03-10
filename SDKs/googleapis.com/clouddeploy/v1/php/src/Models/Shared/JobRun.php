<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * JobRun - A `JobRun` resource in the Google Cloud Deploy API. A `JobRun` contains information of a single `Rollout` job evaluation.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class JobRun
{
    /**
     * AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\AdvanceChildRolloutJobRun $advanceChildRolloutJobRun
     */
	#[\JMS\Serializer\Annotation\SerializedName('advanceChildRolloutJobRun')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\AdvanceChildRolloutJobRun')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?AdvanceChildRolloutJobRun $advanceChildRolloutJobRun = null;
    
    /**
     * CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CreateChildRolloutJobRun $createChildRolloutJobRun
     */
	#[\JMS\Serializer\Annotation\SerializedName('createChildRolloutJobRun')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CreateChildRolloutJobRun')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CreateChildRolloutJobRun $createChildRolloutJobRun = null;
    
    /**
     * Output only. Time at which the `JobRun` was created.
     * 
     * @var ?string $createTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('createTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createTime = null;
    
    /**
     * DeployJobRun contains information specific to a deploy `JobRun`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DeployJobRun $deployJobRun
     */
	#[\JMS\Serializer\Annotation\SerializedName('deployJobRun')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\DeployJobRun')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DeployJobRun $deployJobRun = null;
    
    /**
     * Output only. Time at which the `JobRun` ended.
     * 
     * @var ?string $endTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('endTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $endTime = null;
    
    /**
     * Output only. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * 
     * @var ?string $etag
     */
	#[\JMS\Serializer\Annotation\SerializedName('etag')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $etag = null;
    
    /**
     * Output only. ID of the `Rollout` job this `JobRun` corresponds to.
     * 
     * @var ?string $jobId
     */
	#[\JMS\Serializer\Annotation\SerializedName('jobId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $jobId = null;
    
    /**
     * Optional. Name of the `JobRun`. Format is projects/{project}/locations/{location}/ deliveryPipelines/{deliveryPipeline}/releases/{releases}/rollouts/ {rollouts}/jobRuns/{uuid}.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * Output only. ID of the `Rollout` phase this `JobRun` belongs in.
     * 
     * @var ?string $phaseId
     */
	#[\JMS\Serializer\Annotation\SerializedName('phaseId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $phaseId = null;
    
    /**
     * Output only. Time at which the `JobRun` was started.
     * 
     * @var ?string $startTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('startTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $startTime = null;
    
    /**
     * Output only. The current state of the `JobRun`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\JobRunStateEnum $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\JobRunStateEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?JobRunStateEnum $state = null;
    
    /**
     * Output only. Unique identifier of the `JobRun`.
     * 
     * @var ?string $uid
     */
	#[\JMS\Serializer\Annotation\SerializedName('uid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $uid = null;
    
    /**
     * VerifyJobRun contains information specific to a verify `JobRun`.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\VerifyJobRun $verifyJobRun
     */
	#[\JMS\Serializer\Annotation\SerializedName('verifyJobRun')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\VerifyJobRun')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?VerifyJobRun $verifyJobRun = null;
    
	public function __construct()
	{
		$this->advanceChildRolloutJobRun = null;
		$this->createChildRolloutJobRun = null;
		$this->createTime = null;
		$this->deployJobRun = null;
		$this->endTime = null;
		$this->etag = null;
		$this->jobId = null;
		$this->name = null;
		$this->phaseId = null;
		$this->startTime = null;
		$this->state = null;
		$this->uid = null;
		$this->verifyJobRun = null;
	}
}
