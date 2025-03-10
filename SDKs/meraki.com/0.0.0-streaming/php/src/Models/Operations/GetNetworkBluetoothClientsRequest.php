<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetNetworkBluetoothClientsRequest
{
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * 
     * @var ?string $endingBefore
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=endingBefore')]
    public ?string $endingBefore = null;
    
    /**
     * Include the connectivity history for this client
     * 
     * @var ?bool $includeConnectivityHistory
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=includeConnectivityHistory')]
    public ?bool $includeConnectivityHistory = null;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=networkId')]
    public string $networkId;
    
    /**
     * The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10.
     * 
     * @var ?int $perPage
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=perPage')]
    public ?int $perPage = null;
    
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     * 
     * @var ?string $startingAfter
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=startingAfter')]
    public ?string $startingAfter = null;
    
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 7 days from today.
     * 
     * @var ?string $t0
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=t0')]
    public ?string $t0 = null;
    
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day.
     * 
     * @var ?float $timespan
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=timespan')]
    public ?float $timespan = null;
    
	public function __construct()
	{
		$this->endingBefore = null;
		$this->includeConnectivityHistory = null;
		$this->networkId = "";
		$this->perPage = null;
		$this->startingAfter = null;
		$this->t0 = null;
		$this->timespan = null;
	}
}
