<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Shared;


/**
 * AssetReportGetRequestOptions - An optional object to filter or add data to `/asset_report/get` results. If provided, must be non-`null`.
 * 
 * @package OpenAPI\OpenAPI\Models\Shared
 * @access public
 */
class AssetReportGetRequestOptions
{
    /**
     * The maximum number of days of history to include in the Asset Report.
     * 
     * @var ?int $daysToInclude
     */
	#[\JMS\Serializer\Annotation\SerializedName('days_to_include')]
    #[\JMS\Serializer\Annotation\Type('int')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?int $daysToInclude = null;
    
	public function __construct()
	{
		$this->daysToInclude = null;
	}
}
