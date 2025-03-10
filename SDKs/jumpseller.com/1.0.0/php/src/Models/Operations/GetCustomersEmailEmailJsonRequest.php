<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetCustomersEmailEmailJsonRequest
{
    /**
     * API OAuth token.
     * 
     * @var string $authtoken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=authtoken')]
    public string $authtoken;
    
    /**
     * Email of the Customer
     * 
     * @var string $email
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=email')]
    public string $email;
    
    /**
     * API OAuth login.
     * 
     * @var string $login
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=login')]
    public string $login;
    
	public function __construct()
	{
		$this->authtoken = "";
		$this->email = "";
		$this->login = "";
	}
}
