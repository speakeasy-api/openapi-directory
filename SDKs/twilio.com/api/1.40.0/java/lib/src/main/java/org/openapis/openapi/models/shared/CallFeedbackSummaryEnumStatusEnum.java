/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum CallFeedbackSummaryEnumStatusEnum {
    QUEUED("queued"),
    IN_PROGRESS("in-progress"),
    COMPLETED("completed"),
    FAILED("failed");

    @JsonValue
    public final String value;

    private CallFeedbackSummaryEnumStatusEnum(String value) {
        this.value = value;
    }
}
