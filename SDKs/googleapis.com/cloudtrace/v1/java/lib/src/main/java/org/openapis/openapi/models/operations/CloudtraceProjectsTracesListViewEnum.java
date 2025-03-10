/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CloudtraceProjectsTracesListViewEnum - Optional. Type of data returned for traces in the list. Default is `MINIMAL`.
 */
public enum CloudtraceProjectsTracesListViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    MINIMAL("MINIMAL"),
    ROOTSPAN("ROOTSPAN"),
    COMPLETE("COMPLETE");

    @JsonValue
    public final String value;

    private CloudtraceProjectsTracesListViewEnum(String value) {
        this.value = value;
    }
}
