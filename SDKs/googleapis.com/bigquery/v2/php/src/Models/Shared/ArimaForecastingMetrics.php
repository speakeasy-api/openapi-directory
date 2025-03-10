<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ArimaForecastingMetrics - Model evaluation metrics for ARIMA forecasting models.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ArimaForecastingMetrics
{
    /**
     * Arima model fitting metrics.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ArimaFittingMetrics> $arimaFittingMetrics
     */
	#[\JMS\Serializer\Annotation\SerializedName('arimaFittingMetrics')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ArimaFittingMetrics>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $arimaFittingMetrics = null;
    
    /**
     * Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ArimaSingleModelForecastingMetrics> $arimaSingleModelForecastingMetrics
     */
	#[\JMS\Serializer\Annotation\SerializedName('arimaSingleModelForecastingMetrics')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ArimaSingleModelForecastingMetrics>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $arimaSingleModelForecastingMetrics = null;
    
    /**
     * Whether Arima model fitted with drift or not. It is always false when d is not 1.
     * 
     * @var ?array<bool> $hasDrift
     */
	#[\JMS\Serializer\Annotation\SerializedName('hasDrift')]
    #[\JMS\Serializer\Annotation\Type('array<bool>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $hasDrift = null;
    
    /**
     * Non-seasonal order.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ArimaOrder> $nonSeasonalOrder
     */
	#[\JMS\Serializer\Annotation\SerializedName('nonSeasonalOrder')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Shared\ArimaOrder>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $nonSeasonalOrder = null;
    
    /**
     * Seasonal periods. Repeated because multiple periods are supported for one time series.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Shared\ArimaForecastingMetricsSeasonalPeriodsEnum> $seasonalPeriods
     */
	#[\JMS\Serializer\Annotation\SerializedName('seasonalPeriods')]
    #[\JMS\Serializer\Annotation\Type('array<enum<OpenAPI\OpenAPI\Models\Shared\ArimaForecastingMetricsSeasonalPeriodsEnum>>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $seasonalPeriods = null;
    
    /**
     * Id to differentiate different time series for the large-scale case.
     * 
     * @var ?array<string> $timeSeriesId
     */
	#[\JMS\Serializer\Annotation\SerializedName('timeSeriesId')]
    #[\JMS\Serializer\Annotation\Type('array<string>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $timeSeriesId = null;
    
	public function __construct()
	{
		$this->arimaFittingMetrics = null;
		$this->arimaSingleModelForecastingMetrics = null;
		$this->hasDrift = null;
		$this->nonSeasonalOrder = null;
		$this->seasonalPeriods = null;
		$this->timeSeriesId = null;
	}
}
