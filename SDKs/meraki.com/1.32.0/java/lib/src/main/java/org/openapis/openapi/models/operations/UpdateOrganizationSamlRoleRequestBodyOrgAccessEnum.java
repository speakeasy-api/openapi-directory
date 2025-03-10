/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum - The privilege of the SAML administrator on the organization. Can be one of 'none', 'read-only', 'full' or 'enterprise'
 */
public enum UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum {
    ENTERPRISE("enterprise"),
    FULL("full"),
    NONE("none"),
    READ_ONLY("read-only");

    @JsonValue
    public final String value;

    private UpdateOrganizationSamlRoleRequestBodyOrgAccessEnum(String value) {
        this.value = value;
    }
}
