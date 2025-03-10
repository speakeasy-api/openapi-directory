<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class UpdateNetworkTrafficAnalysisRequestBody
{
    /**
     * The list of items that make up the custom pie chart for traffic reporting.
     * 
     * @var ?array<\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems> $customPieChartItems
     */
	#[\JMS\Serializer\Annotation\SerializedName('customPieChartItems')]
    #[\JMS\Serializer\Annotation\Type('array<OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyCustomPieChartItems>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?array $customPieChartItems = null;
    
    /**
     *     The traffic analysis mode for the network. Can be one of 'disabled' (do not collect traffic types),
     * 
     *     'basic' (collect generic traffic categories), or 'detailed' (collect destination hostnames).
     * 
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyModeEnum $mode
     */
	#[\JMS\Serializer\Annotation\SerializedName('mode')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\UpdateNetworkTrafficAnalysisRequestBodyModeEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?UpdateNetworkTrafficAnalysisRequestBodyModeEnum $mode = null;
    
	public function __construct()
	{
		$this->customPieChartItems = null;
		$this->mode = null;
	}
}
