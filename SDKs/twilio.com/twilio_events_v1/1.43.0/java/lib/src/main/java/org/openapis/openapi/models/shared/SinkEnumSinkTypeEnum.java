/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum SinkEnumSinkTypeEnum {
    KINESIS("kinesis"),
    WEBHOOK("webhook"),
    SEGMENT("segment");

    @JsonValue
    public final String value;

    private SinkEnumSinkTypeEnum(String value) {
        this.value = value;
    }
}
