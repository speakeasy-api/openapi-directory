/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListServiceRoleListServiceRoleResponse - OK
 */
public class ListServiceRoleListServiceRoleResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public ListServiceRoleListServiceRoleResponseMeta meta;
    public ListServiceRoleListServiceRoleResponse withMeta(ListServiceRoleListServiceRoleResponseMeta meta) {
        this.meta = meta;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public org.openapis.openapi.models.shared.ConversationsV1ServiceServiceRole[] roles;
    public ListServiceRoleListServiceRoleResponse withRoles(org.openapis.openapi.models.shared.ConversationsV1ServiceServiceRole[] roles) {
        this.roles = roles;
        return this;
    }
    
}
