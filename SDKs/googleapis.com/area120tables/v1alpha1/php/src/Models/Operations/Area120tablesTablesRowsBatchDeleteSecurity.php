<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class Area120tablesTablesRowsBatchDeleteSecurity
{
	#[SpeakeasyMetadata('security:option=true')]
    public ?Area120tablesTablesRowsBatchDeleteSecurityOption1 $option1 = null;
    
	#[SpeakeasyMetadata('security:option=true')]
    public ?Area120tablesTablesRowsBatchDeleteSecurityOption2 $option2 = null;
    
	#[SpeakeasyMetadata('security:option=true')]
    public ?Area120tablesTablesRowsBatchDeleteSecurityOption3 $option3 = null;
    
	#[SpeakeasyMetadata('security:option=true')]
    public ?Area120tablesTablesRowsBatchDeleteSecurityOption4 $option4 = null;
    
	public function __construct()
	{
		$this->option1 = null;
		$this->option2 = null;
		$this->option3 = null;
		$this->option4 = null;
	}
}
