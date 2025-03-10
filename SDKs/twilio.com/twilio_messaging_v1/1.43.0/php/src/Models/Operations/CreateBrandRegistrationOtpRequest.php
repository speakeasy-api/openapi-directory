<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class CreateBrandRegistrationOtpRequest
{
    /**
     * Brand Registration Sid of Sole Proprietor Brand.
     * 
     * @var string $brandRegistrationSid
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=BrandRegistrationSid')]
    public string $brandRegistrationSid;
    
	public function __construct()
	{
		$this->brandRegistrationSid = "";
	}
}
