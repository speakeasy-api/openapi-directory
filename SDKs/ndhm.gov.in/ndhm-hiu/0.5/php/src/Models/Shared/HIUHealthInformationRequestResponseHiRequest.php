<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class HIUHealthInformationRequestResponseHiRequest
{
	#[\JMS\Serializer\Annotation\SerializedName('sessionStatus')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\HIUHealthInformationRequestResponseHiRequestSessionStatusEnum>')]
    public HIUHealthInformationRequestResponseHiRequestSessionStatusEnum $sessionStatus;
    
	#[\JMS\Serializer\Annotation\SerializedName('transactionId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $transactionId;
    
	public function __construct()
	{
		$this->sessionStatus = \OpenAPI\OpenAPI\Models\Shared\HIUHealthInformationRequestResponseHiRequestSessionStatusEnum::REQUESTED;
		$this->transactionId = "";
	}
}
