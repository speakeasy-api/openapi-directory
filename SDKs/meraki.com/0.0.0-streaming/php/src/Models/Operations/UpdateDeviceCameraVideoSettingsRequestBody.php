<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateDeviceCameraVideoSettingsRequestBody
{
    /**
     * Boolean indicating if external rtsp stream is exposed
     * 
     * @var ?bool $externalRtspEnabled
     */
	#[\JMS\Serializer\Annotation\SerializedName('externalRtspEnabled')]
    #[\JMS\Serializer\Annotation\Type('bool')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?bool $externalRtspEnabled = null;
    
	public function __construct()
	{
		$this->externalRtspEnabled = null;
	}
}
