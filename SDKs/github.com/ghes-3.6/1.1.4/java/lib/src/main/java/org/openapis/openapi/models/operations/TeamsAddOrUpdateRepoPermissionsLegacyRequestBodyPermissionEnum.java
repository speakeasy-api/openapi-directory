/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum - The permission to grant the team on this repository. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
 */
public enum TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum {
    PULL("pull"),
    PUSH("push"),
    ADMIN("admin");

    @JsonValue
    public final String value;

    private TeamsAddOrUpdateRepoPermissionsLegacyRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
