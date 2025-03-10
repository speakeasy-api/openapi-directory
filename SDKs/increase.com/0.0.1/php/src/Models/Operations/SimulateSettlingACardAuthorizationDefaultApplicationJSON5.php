<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class SimulateSettlingACardAuthorizationDefaultApplicationJSON5
{
	#[\JMS\Serializer\Annotation\SerializedName('detail')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $detail;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\SimulateSettlingACardAuthorizationDefaultApplicationJSON5StatusEnum>')]
    public SimulateSettlingACardAuthorizationDefaultApplicationJSON5StatusEnum $status;
    
	#[\JMS\Serializer\Annotation\SerializedName('title')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $title;
    
	#[\JMS\Serializer\Annotation\SerializedName('type')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\SimulateSettlingACardAuthorizationDefaultApplicationJSON5TypeEnum>')]
    public SimulateSettlingACardAuthorizationDefaultApplicationJSON5TypeEnum $type;
    
	public function __construct()
	{
		$this->detail = "";
		$this->status = \OpenAPI\OpenAPI\Models\Operations\SimulateSettlingACardAuthorizationDefaultApplicationJSON5StatusEnum::FOUR_HUNDRED_AND_THREE;
		$this->title = "";
		$this->type = \OpenAPI\OpenAPI\Models\Operations\SimulateSettlingACardAuthorizationDefaultApplicationJSON5TypeEnum::INSUFFICIENT_PERMISSIONS_ERROR;
	}
}
