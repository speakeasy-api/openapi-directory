/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserUserRoles - The users' roles
 */
public class UserUserRoles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String[] role;

    public UserUserRoles withRole(String[] role) {
        this.role = role;
        return this;
    }
    
    public UserUserRoles(){}
}
