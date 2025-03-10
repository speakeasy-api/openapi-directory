<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class AuthkeyPatchRequest
{
    /**
     * auth key to mark as compromised
     * 
     * @var string $authKey
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=auth_key')]
    public string $authKey;
    
    /**
     * Comments (like how was this compromised)
     * 
     * @var ?string $comments
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=comments')]
    public ?string $comments = null;
    
	public function __construct()
	{
		$this->authKey = "";
		$this->comments = null;
	}
}
