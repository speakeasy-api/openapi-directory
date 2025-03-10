<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


/**
 * GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsPm25 - Reading for the 'pm25' metric. This will only be present if the 'metric' property equals 'pm25'.
 * 
 * @package OpenAPI\OpenAPI\Models\Operations
 * @access public
 */
class GetOrganizationSensorReadingsLatest200ApplicationJSONReadingsPm25
{
    /**
     * PM2.5 reading in micrograms per cubic meter.
     * 
     * @var ?int $concentration
     */
	#[\JMS\Serializer\Annotation\SerializedName('concentration')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $concentration = null;
    
	public function __construct()
	{
		$this->concentration = null;
	}
}
