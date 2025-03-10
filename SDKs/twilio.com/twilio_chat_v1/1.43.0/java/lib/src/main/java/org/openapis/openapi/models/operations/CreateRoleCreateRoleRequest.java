/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class CreateRoleCreateRoleRequest {
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64 characters long.
     */
    @SpeakeasyMetadata("form:name=FriendlyName")
    public String friendlyName;

    public CreateRoleCreateRoleRequest withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    
    /**
     * A permission that you grant to the new role. Only one permission can be granted per parameter. To assign more than one permission, repeat this parameter for each permission value. The values for this parameter depend on the role's `type` and are described in the documentation.
     */
    @SpeakeasyMetadata("form:name=Permission")
    public String[] permission;

    public CreateRoleCreateRoleRequest withPermission(String[] permission) {
        this.permission = permission;
        return this;
    }
    
    @SpeakeasyMetadata("form:name=Type")
    public org.openapis.openapi.models.shared.RoleEnumRoleTypeEnum type;

    public CreateRoleCreateRoleRequest withType(org.openapis.openapi.models.shared.RoleEnumRoleTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public CreateRoleCreateRoleRequest(@JsonProperty("FriendlyName") String friendlyName, @JsonProperty("Permission") String[] permission, @JsonProperty("Type") org.openapis.openapi.models.shared.RoleEnumRoleTypeEnum type) {
        this.friendlyName = friendlyName;
        this.permission = permission;
        this.type = type;
  }
}
