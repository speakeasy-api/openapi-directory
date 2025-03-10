<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class GlobalHook2Config
{
	#[\JMS\Serializer\Annotation\SerializedName('content_type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $contentType = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('insecure_ssl')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $insecureSsl = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->contentType = null;
		$this->insecureSsl = null;
		$this->url = null;
	}
}
