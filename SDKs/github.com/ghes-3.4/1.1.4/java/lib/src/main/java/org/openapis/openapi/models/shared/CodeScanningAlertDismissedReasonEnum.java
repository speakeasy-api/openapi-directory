/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CodeScanningAlertDismissedReasonEnum - **Required when the state is dismissed.** The reason for dismissing or closing the alert.
 */
public enum CodeScanningAlertDismissedReasonEnum {
    LESS_THAN_NIL_GREATER_THAN("<nil>"),
    FALSE_POSITIVE("false positive"),
    WON_T_FIX("won't fix"),
    USED_IN_TESTS("used in tests");

    @JsonValue
    public final String value;

    private CodeScanningAlertDismissedReasonEnum(String value) {
        this.value = value;
    }
}
