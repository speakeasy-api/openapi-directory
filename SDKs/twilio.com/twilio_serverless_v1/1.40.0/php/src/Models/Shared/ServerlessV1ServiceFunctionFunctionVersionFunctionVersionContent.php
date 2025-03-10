<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent - OK
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ServerlessV1ServiceFunctionFunctionVersionFunctionVersionContent
{
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function Version resource.
     * 
     * @var ?string $accountSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('account_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $accountSid = null;
    
    /**
     * The content of the Function Version resource.
     * 
     * @var ?string $content
     */
	#[\JMS\Serializer\Annotation\SerializedName('content')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $content = null;
    
    /**
     * The SID of the Function that is the parent of the Function Version.
     * 
     * @var ?string $functionSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('function_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $functionSid = null;
    
    /**
     * The SID of the Service that the Function Version resource is associated with.
     * 
     * @var ?string $serviceSid
     */
	#[\JMS\Serializer\Annotation\SerializedName('service_sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $serviceSid = null;
    
    /**
     * The unique string that we created to identify the Function Version resource.
     * 
     * @var ?string $sid
     */
	#[\JMS\Serializer\Annotation\SerializedName('sid')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $sid = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->accountSid = null;
		$this->content = null;
		$this->functionSid = null;
		$this->serviceSid = null;
		$this->sid = null;
		$this->url = null;
	}
}
