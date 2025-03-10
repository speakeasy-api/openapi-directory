/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * SnapshotSnapshotTypeEnum - Indicates the type of the snapshot.
 */
public enum SnapshotSnapshotTypeEnum {
    ARCHIVE("ARCHIVE"),
    STANDARD("STANDARD");

    @JsonValue
    public final String value;

    private SnapshotSnapshotTypeEnum(String value) {
        this.value = value;
    }
}
