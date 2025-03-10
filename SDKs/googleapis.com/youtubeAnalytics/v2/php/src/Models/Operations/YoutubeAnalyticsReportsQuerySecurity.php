<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class YoutubeAnalyticsReportsQuerySecurity
{
	#[SpeakeasyMetadata('security:option=true')]
    public ?YoutubeAnalyticsReportsQuerySecurityOption1 $option1 = null;
    
	#[SpeakeasyMetadata('security:option=true')]
    public ?YoutubeAnalyticsReportsQuerySecurityOption2 $option2 = null;
    
	#[SpeakeasyMetadata('security:option=true')]
    public ?YoutubeAnalyticsReportsQuerySecurityOption3 $option3 = null;
    
	#[SpeakeasyMetadata('security:option=true')]
    public ?YoutubeAnalyticsReportsQuerySecurityOption4 $option4 = null;
    
	#[SpeakeasyMetadata('security:option=true')]
    public ?YoutubeAnalyticsReportsQuerySecurityOption5 $option5 = null;
    
	public function __construct()
	{
		$this->option1 = null;
		$this->option2 = null;
		$this->option3 = null;
		$this->option4 = null;
		$this->option5 = null;
	}
}
