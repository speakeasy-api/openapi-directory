<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class CodeScanningAlertRule
{
    /**
     * A short description of the rule used to detect the alert.
     * 
     * @var ?string $description
     */
	#[\JMS\Serializer\Annotation\SerializedName('description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $description = null;
    
    /**
     * description of the rule used to detect the alert.
     * 
     * @var ?string $fullDescription
     */
	#[\JMS\Serializer\Annotation\SerializedName('full_description')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $fullDescription = null;
    
    /**
     * Detailed documentation for the rule as GitHub Flavored Markdown.
     * 
     * @var ?string $help
     */
	#[\JMS\Serializer\Annotation\SerializedName('help')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $help = null;
    
    /**
     * A link to the documentation for the rule used to detect the alert.
     * 
     * @var ?string $helpUri
     */
	#[\JMS\Serializer\Annotation\SerializedName('help_uri')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $helpUri = null;
    
    /**
     * A unique identifier for the rule used to detect the alert.
     * 
     * @var ?string $id
     */
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $id = null;
    
    /**
     * The name of the rule used to detect the alert.
     * 
     * @var ?string $name
     */
	#[\JMS\Serializer\Annotation\SerializedName('name')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $name = null;
    
    /**
     * The security severity of the alert.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CodeScanningAlertRuleSecuritySeverityLevelEnum $securitySeverityLevel
     */
	#[\JMS\Serializer\Annotation\SerializedName('security_severity_level')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CodeScanningAlertRuleSecuritySeverityLevelEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CodeScanningAlertRuleSecuritySeverityLevelEnum $securitySeverityLevel = null;
    
    /**
     * The severity of the alert.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\CodeScanningAlertRuleSeverityEnum $severity
     */
	#[\JMS\Serializer\Annotation\SerializedName('severity')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\CodeScanningAlertRuleSeverityEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CodeScanningAlertRuleSeverityEnum $severity = null;
    
    /**
     * A set of tags applicable for the rule.
     * 
     * @var ?array<string> $tags
     */
	#[\JMS\Serializer\Annotation\SerializedName('tags')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $tags = null;
    
	public function __construct()
	{
		$this->description = null;
		$this->fullDescription = null;
		$this->help = null;
		$this->helpUri = null;
		$this->id = null;
		$this->name = null;
		$this->securitySeverityLevel = null;
		$this->severity = null;
		$this->tags = null;
	}
}
