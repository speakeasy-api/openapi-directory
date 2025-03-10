<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class TeamsAddOrUpdateProjectPermissionsInOrgRequestBody
{
    /**
     * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.2/rest/overview/resources-in-the-rest-api#http-verbs)."
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum $permission
     */
	#[\JMS\Serializer\Annotation\SerializedName('permission')]
    #[\JMS\Serializer\Annotation\Type('enum<OpenAPI\OpenAPI\Models\Operations\TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum>')]
    #[\JMS\Serializer\Annotation\SkipWhenEmpty]
    public ?TeamsAddOrUpdateProjectPermissionsInOrgRequestBodyPermissionEnum $permission = null;
    
	public function __construct()
	{
		$this->permission = null;
	}
}
