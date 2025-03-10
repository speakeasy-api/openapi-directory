<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AuthenticationRule - Authentication rules for the service. By default, if a method has any authentication requirements, every request must include a valid credential matching one of the requirements. It's an error to include more than one kind of credential in a single request. If a method doesn't have any auth requirements, request credentials will be ignored.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AuthenticationRule
{
    /**
     * If true, the service accepts API keys without any other credential. This flag only applies to HTTP and gRPC requests.
     * 
     * @var ?bool $allowWithoutCredential
     */
	#[\JMS\Serializer\Annotation\SerializedName('allowWithoutCredential')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $allowWithoutCredential = null;
    
    /**
     * OAuth scopes are a way to define data and permissions on data. For example, there are scopes defined for "Read-only access to Google Calendar" and "Access to Cloud Platform". Users can consent to a scope for an application, giving it permission to access that data on their behalf. OAuth scope specifications should be fairly coarse grained; a user will need to see and understand the text description of what your scope means. In most cases: use one or at most two OAuth scopes for an entire family of products. If your product has multiple APIs, you should probably be sharing the OAuth scope across all of those APIs. When you need finer grained OAuth consent screens: talk with your product management about how developers will use them in practice. Please note that even though each of the canonical scopes is enough for a request to be accepted and passed to the backend, a request can still fail due to the backend requiring additional scopes or permissions.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\OAuthRequirements $oauth
     */
	#[\JMS\Serializer\Annotation\SerializedName('oauth')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\OAuthRequirements')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?OAuthRequirements $oauth = null;
    
    /**
     * Requirements for additional authentication providers.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\AuthRequirement> $requirements
     */
	#[\JMS\Serializer\Annotation\SerializedName('requirements')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\AuthRequirement>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $requirements = null;
    
    /**
     * Selects the methods to which this rule applies. Refer to selector for syntax details.
     * 
     * @var ?string $selector
     */
	#[\JMS\Serializer\Annotation\SerializedName('selector')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $selector = null;
    
	public function __construct()
	{
		$this->allowWithoutCredential = null;
		$this->oauth = null;
		$this->requirements = null;
		$this->selector = null;
	}
}
