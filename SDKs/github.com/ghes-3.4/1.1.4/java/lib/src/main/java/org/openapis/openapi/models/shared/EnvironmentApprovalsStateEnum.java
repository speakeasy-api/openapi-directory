/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * EnvironmentApprovalsStateEnum - Whether deployment to the environment(s) was approved or rejected or pending (with comments)
 */
public enum EnvironmentApprovalsStateEnum {
    APPROVED("approved"),
    REJECTED("rejected"),
    PENDING("pending");

    @JsonValue
    public final String value;

    private EnvironmentApprovalsStateEnum(String value) {
        this.value = value;
    }
}
