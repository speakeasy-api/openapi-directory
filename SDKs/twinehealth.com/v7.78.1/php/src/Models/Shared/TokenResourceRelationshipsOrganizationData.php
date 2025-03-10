<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TokenResourceRelationshipsOrganizationData
{
	#[\JMS\Serializer\Annotation\SerializedName('id')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $id;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\TokenResourceRelationshipsOrganizationDataTypeEnum>')]
    public TokenResourceRelationshipsOrganizationDataTypeEnum $type;
    
	public function __construct()
	{
		$this->id = "";
		$this->type = \OpenAPI\OpenAPI\Models\Shared\TokenResourceRelationshipsOrganizationDataTypeEnum::ORGANIZATION;
	}
}
