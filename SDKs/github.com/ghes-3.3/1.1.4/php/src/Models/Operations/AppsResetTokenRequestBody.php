<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class AppsResetTokenRequestBody
{
    /**
     * The access_token of the OAuth application.
     * 
     * @var string $accessToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('access_token')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $accessToken;
    
	public function __construct()
	{
		$this->accessToken = "";
	}
}
