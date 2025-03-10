<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * GetTokenMetadataResponseMetadataOfIssuanceDataUserData - Metadata set by user on token
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class GetTokenMetadataResponseMetadataOfIssuanceDataUserData
{
    /**
     * $meta
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta> $meta
     */
	#[\JMS\Serializer\Annotation\SerializedName('meta')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\GetTokenMetadataResponseMetadataOfIssuanceDataUserDataMeta>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $meta = null;
    
	public function __construct()
	{
		$this->meta = null;
	}
}
