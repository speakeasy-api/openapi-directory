<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * CreateTokenResponse - Created
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class CreateTokenResponse
{
	#[\JMS\Serializer\Annotation\SerializedName('data')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TokenResource')]
    public TokenResource $data;
    
    /**
     * $included
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GroupResource> $included
     */
	#[\JMS\Serializer\Annotation\SerializedName('included')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GroupResource>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $included = null;
    
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\CreateOrUpdateMetaResponse')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CreateOrUpdateMetaResponse $meta = null;
    
	public function __construct()
	{
		$this->data = new \OpenAPI\OpenAPI\Models\Shared\TokenResource();
		$this->included = null;
		$this->meta = null;
	}
}
