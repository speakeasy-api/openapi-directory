<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class GetEvents401ApplicationJSONMeta
{
	#[\JMS\Serializer\Annotation\SerializedName('requestId')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $requestId;
    
	#[\JMS\Serializer\Annotation\SerializedName('status')]
    #[\JMS\Serializer\Annotation\Type('float')]
    public float $status;
    
	public function __construct()
	{
		$this->requestId = "";
		$this->status = 0;
	}
}
