<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PostStatsIncrementFieldRequest
{
    /**
     * The id of the app associated with this statistic value
     * 
     * @var string $appId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=appId')]
    public string $appId;
    
    /**
     * The date (in millis) for when this increment occurred. The default is the current date if no value is provided.
     * 
     * @var ?int $date
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=date')]
    public ?int $date = null;
    
    /**
     * The field to be incremented
     * 
     * @var string $field
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=field')]
    public string $field;
    
    /**
     * The id of the user that is performing the action
     * 
     * @var ?string $userId
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=userId')]
    public ?string $userId = null;
    
    /**
     * The increment amount. Default is 1 if no value is provided.
     * 
     * @var ?int $value
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=value')]
    public ?int $value = null;
    
	public function __construct()
	{
		$this->appId = "";
		$this->date = null;
		$this->field = "";
		$this->userId = null;
		$this->value = null;
	}
}
