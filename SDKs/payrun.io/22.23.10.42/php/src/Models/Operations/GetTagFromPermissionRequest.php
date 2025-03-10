<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetTagFromPermissionRequest
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
     * The permission unique identifier. E.g PERM001
     * 
     * @var string $permissionId
     */
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=PermissionId')]
    public string $permissionId;
    
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
		$this->permissionId = "";
		$this->tagId = "";
	}
}
