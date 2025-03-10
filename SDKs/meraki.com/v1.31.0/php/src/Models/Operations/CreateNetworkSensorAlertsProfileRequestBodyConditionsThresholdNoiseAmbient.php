<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient - Ambient noise threshold. One of 'level' or 'quality' must be provided.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbient
{
    /**
     * Alerting threshold as adjusted decibels.
     * 
     * @var ?int $level
     */
	#[\JMS\Serializer\Annotation\SerializedName('level')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $level = null;
    
    /**
     * Alerting threshold as a qualitative ambient noise level.
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum $quality
     */
	#[\JMS\Serializer\Annotation\SerializedName('quality')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?CreateNetworkSensorAlertsProfileRequestBodyConditionsThresholdNoiseAmbientQualityEnum $quality = null;
    
	public function __construct()
	{
		$this->level = null;
		$this->quality = null;
	}
}
