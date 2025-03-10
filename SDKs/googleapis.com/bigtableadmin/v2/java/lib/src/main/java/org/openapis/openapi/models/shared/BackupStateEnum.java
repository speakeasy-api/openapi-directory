/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * BackupStateEnum - Output only. The current state of the backup.
 */
public enum BackupStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY");

    @JsonValue
    public final String value;

    private BackupStateEnum(String value) {
        this.value = value;
    }
}
