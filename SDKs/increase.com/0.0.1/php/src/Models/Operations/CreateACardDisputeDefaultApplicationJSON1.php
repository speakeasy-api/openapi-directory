<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateACardDisputeDefaultApplicationJSON1
{
	#[\JMS\Serializer\Annotation\SerializedName('detail')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $detail;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\CreateACardDisputeDefaultApplicationJSON1StatusEnum>')]
    public CreateACardDisputeDefaultApplicationJSON1StatusEnum $status;
    
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $title;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\CreateACardDisputeDefaultApplicationJSON1TypeEnum>')]
    public CreateACardDisputeDefaultApplicationJSON1TypeEnum $type;
    
	public function __construct()
	{
		$this->detail = "";
		$this->status = \OpenAPI\OpenAPI\Models\Operations\CreateACardDisputeDefaultApplicationJSON1StatusEnum::FOUR_HUNDRED_AND_FOUR;
		$this->title = "";
		$this->type = \OpenAPI\OpenAPI\Models\Operations\CreateACardDisputeDefaultApplicationJSON1TypeEnum::API_METHOD_NOT_FOUND_ERROR;
	}
}
