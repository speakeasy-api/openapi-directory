/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * LogConfigCloudAuditOptionsLogNameEnum - This is deprecated and has no effect. Do not use.
 */
public enum LogConfigCloudAuditOptionsLogNameEnum {
    ADMIN_ACTIVITY("ADMIN_ACTIVITY"),
    DATA_ACCESS("DATA_ACCESS"),
    UNSPECIFIED_LOG_NAME("UNSPECIFIED_LOG_NAME");

    @JsonValue
    public final String value;

    private LogConfigCloudAuditOptionsLogNameEnum(String value) {
        this.value = value;
    }
}
