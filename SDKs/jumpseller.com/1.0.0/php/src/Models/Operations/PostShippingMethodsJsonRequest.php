<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class PostShippingMethodsJsonRequest
{
    /**
     * Shipping Method parameters.
     * 
     * @var \OpenAPI\OpenAPI\Models\Shared\ShippingMethodEdit $shippingMethodEdit
     */
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\ShippingMethodEdit $shippingMethodEdit;
    
    /**
     * API OAuth token.
     * 
     * @var string $authtoken
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=authtoken')]
    public string $authtoken;
    
    /**
     * API OAuth login.
     * 
     * @var string $login
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=login')]
    public string $login;
    
	public function __construct()
	{
		$this->shippingMethodEdit = new \OpenAPI\OpenAPI\Models\Shared\ShippingMethodEdit();
		$this->authtoken = "";
		$this->login = "";
	}
}
