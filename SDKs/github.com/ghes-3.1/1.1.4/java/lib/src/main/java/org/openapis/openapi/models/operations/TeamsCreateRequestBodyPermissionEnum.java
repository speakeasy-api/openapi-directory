/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * TeamsCreateRequestBodyPermissionEnum - **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
 */
public enum TeamsCreateRequestBodyPermissionEnum {
    PULL("pull"),
    PUSH("push");

    @JsonValue
    public final String value;

    private TeamsCreateRequestBodyPermissionEnum(String value) {
        this.value = value;
    }
}
