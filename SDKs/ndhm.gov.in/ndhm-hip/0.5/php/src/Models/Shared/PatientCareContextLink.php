<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class PatientCareContextLink
{
    /**
     * AccessToken fetched in the user auth process for the purpose specified
     * 
     * @var string $accessToken
     */
	#[\JMS\Serializer\Annotation\SerializedName('accessToken')]
    #[\JMS\Serializer\Annotation\Type('string')]
    public string $accessToken;
    
	#[\JMS\Serializer\Annotation\SerializedName('patient')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkPatient')]
    public PatientCareContextLinkPatient $patient;
    
	public function __construct()
	{
		$this->accessToken = "";
		$this->patient = new \OpenAPI\OpenAPI\Models\Shared\PatientCareContextLinkPatient();
	}
}
