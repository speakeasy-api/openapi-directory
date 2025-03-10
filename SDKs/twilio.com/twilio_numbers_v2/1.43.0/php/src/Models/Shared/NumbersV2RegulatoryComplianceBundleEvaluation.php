<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * NumbersV2RegulatoryComplianceBundleEvaluation - Created
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class NumbersV2RegulatoryComplianceBundleEvaluation
{
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Bundle resource.
     * 
     * @var ?string $accountSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('account_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountSid = null;
    
    /**
     * The unique string that we created to identify the Bundle resource.
     * 
     * @var ?string $bundleSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('bundle_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $bundleSid = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('date_created')]
    #[\JMS\Serializer\Annotation\Type("DateTime<'Y-m-d\TH:i:s.up'>")]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\DateTime $dateCreated = null;
    
    /**
     * The unique string of a regulation that is associated to the Bundle resource.
     * 
     * @var ?string $regulationSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('regulation_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $regulationSid = null;
    
    /**
     * The results of the Evaluation which includes the valid and invalid attributes.
     * 
     * @var ?array<mixed> $results
     */
	#[\JMS\Serializer\Annotation\SerializedName('results')]
    #[\JMS\Serializer\Annotation\Type('array<mixed>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $results = null;
    
    /**
     * The unique string that identifies the Evaluation resource.
     * 
     * @var ?string $sid
     */
	#[\JMS\Serializer\Annotation\SerializedName('sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sid = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\EvaluationEnumStatusEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?EvaluationEnumStatusEnum $status = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->accountSid = null;
		$this->bundleSid = null;
		$this->dateCreated = null;
		$this->regulationSid = null;
		$this->results = null;
		$this->sid = null;
		$this->status = null;
		$this->url = null;
	}
}
