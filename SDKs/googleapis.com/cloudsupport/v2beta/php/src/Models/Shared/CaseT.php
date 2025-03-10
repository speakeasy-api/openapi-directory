<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CaseT - A support case.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CaseT
{
    /**
     * A classification object with a product type and value.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CaseClassification $classification
     */
	#[\JMS\Serializer\Annotation\SerializedName('classification')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CaseClassification')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CaseClassification $classification = null;
    
    /**
     * A user-supplied email address to send case update notifications for. This should only be used in BYOID flows, where we cannot infer the user's email address directly from their EUCs.
     * 
     * @var ?string $contactEmail
     */
	#[\JMS\Serializer\Annotation\SerializedName('contactEmail')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contactEmail = null;
    
    /**
     * Output only. The time this case was created.
     * 
     * @var ?string $createTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('createTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $createTime = null;
    
    /**
     * An object containing information about the effective user and authenticated principal responsible for an action.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Actor $creator
     */
	#[\JMS\Serializer\Annotation\SerializedName('creator')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\Actor')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?Actor $creator = null;
    
    /**
     * A broad description of the issue.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * The short summary of the issue reported in this case.
     * 
     * @var ?string $displayName
     */
	#[\JMS\Serializer\Annotation\SerializedName('displayName')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $displayName = null;
    
    /**
     * Whether the case is currently escalated.
     * 
     * @var ?bool $escalated
     */
	#[\JMS\Serializer\Annotation\SerializedName('escalated')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $escalated = null;
    
    /**
     * The language the user has requested to receive support in. This should be a BCP 47 language code (e.g., `"en"`, `"zh-CN"`, `"zh-TW"`, `"ja"`, `"ko"`). If no language or an unsupported language is specified, this field defaults to English (en). Language selection during case creation may affect your available support options. For a list of supported languages and their support working hours, see: https://cloud.google.com/support/docs/language-working-hours
     * 
     * @var ?string $languageCode
     */
	#[\JMS\Serializer\Annotation\SerializedName('languageCode')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $languageCode = null;
    
    /**
     * The resource name for the case.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The priority of this case.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CasePriorityEnum $priority
     */
	#[\JMS\Serializer\Annotation\SerializedName('priority')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CasePriorityEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CasePriorityEnum $priority = null;
    
    /**
     * REMOVED. The severity of this case. Use priority instead.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CaseSeverityEnum $severity
     */
	#[\JMS\Serializer\Annotation\SerializedName('severity')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CaseSeverityEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CaseSeverityEnum $severity = null;
    
    /**
     * Output only. The current status of the support case.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CaseStateEnum $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CaseStateEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CaseStateEnum $state = null;
    
    /**
     * The email addresses to receive updates on this case.
     * 
     * @var ?array<string> $subscriberEmailAddresses
     */
	#[\JMS\Serializer\Annotation\SerializedName('subscriberEmailAddresses')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $subscriberEmailAddresses = null;
    
    /**
     * Whether this case was created for internal API testing and should not be acted on by the support team.
     * 
     * @var ?bool $testCase
     */
	#[\JMS\Serializer\Annotation\SerializedName('testCase')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $testCase = null;
    
    /**
     * The timezone of the user who created the support case. It should be in a format IANA recognizes: https://www.iana.org/time-zones. There is no additional validation done by the API.
     * 
     * @var ?string $timeZone
     */
	#[\JMS\Serializer\Annotation\SerializedName('timeZone')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $timeZone = null;
    
    /**
     * Output only. The time this case was last updated.
     * 
     * @var ?string $updateTime
     */
	#[\JMS\Serializer\Annotation\SerializedName('updateTime')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $updateTime = null;
    
	public function __construct()
	{
		$this->classification = null;
		$this->contactEmail = null;
		$this->createTime = null;
		$this->creator = null;
		$this->description = null;
		$this->displayName = null;
		$this->escalated = null;
		$this->languageCode = null;
		$this->name = null;
		$this->priority = null;
		$this->severity = null;
		$this->state = null;
		$this->subscriberEmailAddresses = null;
		$this->testCase = null;
		$this->timeZone = null;
		$this->updateTime = null;
	}
}
