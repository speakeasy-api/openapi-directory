<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


class TimeMachinePointDailyStatsData
{
	#[\JMS\Serializer\Annotation\SerializedName('precipitation')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TimeMachinePointDailyStatsPrecipitationData')]
    public TimeMachinePointDailyStatsPrecipitationData $precipitation;
    
	#[\JMS\Serializer\Annotation\SerializedName('temperature')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TimeMachinePointDailyStatsTemperatureData')]
    public TimeMachinePointDailyStatsTemperatureData $temperature;
    
	#[\JMS\Serializer\Annotation\SerializedName('wind')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\TimeMachinePointDailyStatsWindData')]
    public TimeMachinePointDailyStatsWindData $wind;
    
	public function __construct()
	{
		$this->precipitation = new \OpenAPI\OpenAPI\Models\Shared\TimeMachinePointDailyStatsPrecipitationData();
		$this->temperature = new \OpenAPI\OpenAPI\Models\Shared\TimeMachinePointDailyStatsTemperatureData();
		$this->wind = new \OpenAPI\OpenAPI\Models\Shared\TimeMachinePointDailyStatsWindData();
	}
}
