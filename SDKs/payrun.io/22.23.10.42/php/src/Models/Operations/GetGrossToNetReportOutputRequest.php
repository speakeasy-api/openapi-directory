<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetGrossToNetReportOutputRequest
{
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     * 
     * @var string $apiVersion
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Api-Version')]
    public string $apiVersion;
    
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     * 
     * @var string $authorization
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Authorization')]
    public string $authorization;
    
    /**
     * The employer unique key. E.g. ER001
     * 
     * @var string $employerKey
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=EmployerKey')]
    public string $employerKey;
    
    /**
     * The highest element index to return from the report. Used to control paging within large data sets. E.g. 100
     * 
     * @var ?string $maxIndex
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=MaxIndex')]
    public ?string $maxIndex = null;
    
    /**
     * The pay schedule unique key. E.g. SCH001
     * 
     * @var string $payScheduleKey
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=PayScheduleKey')]
    public string $payScheduleKey;
    
    /**
     * The element index to begin the report. Used to control paging within large data sets. E.g. 1
     * 
     * @var ?string $startIndex
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=StartIndex')]
    public ?string $startIndex = null;
    
    /**
     * The tax period number.
     * 
     * @var ?string $taxPeriod
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=TaxPeriod')]
    public ?string $taxPeriod = null;
    
    /**
     * The tax year. E.g. 2017 = 2017/18 year.
     * 
     * @var string $taxYear
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=TaxYear')]
    public string $taxYear;
    
	public function __construct()
	{
		$this->apiVersion = "";
		$this->authorization = "";
		$this->employerKey = "";
		$this->maxIndex = null;
		$this->payScheduleKey = "";
		$this->startIndex = null;
		$this->taxPeriod = null;
		$this->taxYear = "";
	}
}
