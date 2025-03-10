<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * ReportDefinition - The report definition object.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class ReportDefinition
{
	#[\JMS\Serializer\Annotation\SerializedName('ReportDefinition')]
    #[\JMS\Serializer\Annotation\Type('OpenAPI\OpenAPI\Models\Shared\ReportDefinitionReportDefinition')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?ReportDefinitionReportDefinition $reportDefinition = null;
    
	public function __construct()
	{
		$this->reportDefinition = null;
	}
}
