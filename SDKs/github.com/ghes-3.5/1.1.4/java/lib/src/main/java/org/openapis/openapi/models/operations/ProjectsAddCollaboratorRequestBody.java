/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ProjectsAddCollaboratorRequestBody {
    /**
     * The permission to grant the collaborator.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permission")
    public ProjectsAddCollaboratorRequestBodyPermissionEnum permission;

    public ProjectsAddCollaboratorRequestBody withPermission(ProjectsAddCollaboratorRequestBodyPermissionEnum permission) {
        this.permission = permission;
        return this;
    }
    
    public ProjectsAddCollaboratorRequestBody(){}
}
