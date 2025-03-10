<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class EnterpriseAdminDeleteUserFromEnterpriseRequest
{
    /**
     * The unique identifier of the SCIM user.
     * 
     * @var string $scimUserId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=scim_user_id')]
    public string $scimUserId;
    
	public function __construct()
	{
		$this->scimUserId = "";
	}
}
