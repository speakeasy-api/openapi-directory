/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class TeamsAddOrUpdateProjectPermissionsLegacyRequestBody {
    /**
     * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#http-verbs)."
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum permission;

    public TeamsAddOrUpdateProjectPermissionsLegacyRequestBody withPermission(TeamsAddOrUpdateProjectPermissionsLegacyRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    
    public TeamsAddOrUpdateProjectPermissionsLegacyRequestBody(){}
}
