<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * JWKSAlgoSettings - Settings for a JWK set
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class JWKSAlgoSettings
{
    /**
     * The headers for the http call
     * 
     * @var ?array<string, string> $headers
     */
	#[\JMS\Serializer\Annotation\SerializedName('headers')]
    #[\JMS\Serializer\Annotation\Type('array<string, string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $headers = null;
    
    /**
     * The type of key: RSA or EC
     * 
     * @var ?string $kty
     */
	#[\JMS\Serializer\Annotation\SerializedName('kty')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $kty = null;
    
    /**
     * The timeout of the http call
     * 
     * @var ?int $timeout
     */
	#[\JMS\Serializer\Annotation\SerializedName('timeout')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $timeout = null;
    
    /**
     * The ttl of the keyset
     * 
     * @var ?int $ttl
     */
	#[\JMS\Serializer\Annotation\SerializedName('ttl')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $ttl = null;
    
    /**
     * String with value JWKSAlgoSettings
     * 
     * @var string $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $type;
    
    /**
     * The url for the http call
     * 
     * @var ?string $url
     */
	#[\JMS\Serializer\Annotation\SerializedName('url')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $url = null;
    
	public function __construct()
	{
		$this->headers = null;
		$this->kty = null;
		$this->timeout = null;
		$this->ttl = null;
		$this->type = "";
		$this->url = null;
	}
}
