/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum - Specifies the input/output type for the parameter.
 */
public enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum {
    IN_OUT_TYPE_UNSPECIFIED("IN_OUT_TYPE_UNSPECIFIED"),
    IN("IN"),
    OUT("OUT"),
    IN_OUT("IN_OUT");

    @JsonValue
    public final String value;

    private EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutTypeEnum(String value) {
        this.value = value;
    }
}
