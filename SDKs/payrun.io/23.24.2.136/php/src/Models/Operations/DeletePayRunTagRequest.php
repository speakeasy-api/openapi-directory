<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class DeletePayRunTagRequest
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
     * The employers' unique identifier. E.g ER001
     * 
     * @var string $employerId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=EmployerId')]
    public string $employerId;
    
    /**
     * The pay runs' unique identifier. E.g. PR001
     * 
     * @var string $payRunId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=PayRunId')]
    public string $payRunId;
    
    /**
     * The pay schedules' unique identifier. E.g SCH001
     * 
     * @var string $payScheduleId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=PayScheduleId')]
    public string $payScheduleId;
    
    /**
     * The tag unique identifier. E.g. MyTag
     * 
     * @var string $tagId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=TagId')]
    public string $tagId;
    
	public function __construct()
	{
		$this->apiVersion = "";
		$this->authorization = "";
		$this->employerId = "";
		$this->payRunId = "";
		$this->payScheduleId = "";
		$this->tagId = "";
	}
}
