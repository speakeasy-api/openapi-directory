/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CustomerProfileEnumStatusEnum - The verification status of the Customer-Profile resource.
 */
public enum CustomerProfileEnumStatusEnum {
    DRAFT("draft"),
    PENDING_REVIEW("pending-review"),
    IN_REVIEW("in-review"),
    TWILIO_REJECTED("twilio-rejected"),
    TWILIO_APPROVED("twilio-approved");

    @JsonValue
    public final String value;

    private CustomerProfileEnumStatusEnum(String value) {
        this.value = value;
    }
}
