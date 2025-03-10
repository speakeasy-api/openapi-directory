<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class DnsKeyDigest
{
    /**
     * The base-16 encoded bytes of this digest. Suitable for use in a DS resource record.
     * 
     * @var ?string $digest
     */
	#[\JMS\Serializer\Annotation\SerializedName('digest')]
    #[\JMS\Serializer\Annotation\Type('string')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?string $digest = null;
    
    /**
     * Specifies the algorithm used to calculate this digest.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\DnsKeyDigestTypeEnum $type
     */
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\DnsKeyDigestTypeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?DnsKeyDigestTypeEnum $type = null;
    
	public function __construct()
	{
		$this->digest = null;
		$this->type = null;
	}
}
