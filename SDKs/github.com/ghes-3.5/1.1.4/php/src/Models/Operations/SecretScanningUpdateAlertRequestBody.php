<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class SecretScanningUpdateAlertRequestBody
{
    /**
     * **Required when the `state` is `resolved`.** The reason for resolving the alert.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertResolutionEnum $resolution
     */
	#[\JMS\Serializer\Annotation\SerializedName('resolution')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertResolutionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?\OpenAPI\OpenAPI\Models\Shared\SecretScanningAlertResolutionEnum $resolution = null;
    
    /**
     * Sets the state of the secret scanning alert. You must provide `resolution` when you set the state to `resolved`.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\SchemassecretScanningAlertStateEnum $state
     */
	#[\JMS\Serializer\Annotation\SerializedName('state')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Shared\SchemassecretScanningAlertStateEnum>')]
    public \OpenAPI\OpenAPI\Models\Shared\SchemassecretScanningAlertStateEnum $state;
    
	public function __construct()
	{
		$this->resolution = null;
		$this->state = \OpenAPI\OpenAPI\Models\Shared\SchemassecretScanningAlertStateEnum::OPEN;
	}
}
