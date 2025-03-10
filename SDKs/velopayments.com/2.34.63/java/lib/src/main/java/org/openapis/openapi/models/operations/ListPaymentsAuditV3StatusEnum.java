/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ListPaymentsAuditV3StatusEnum - Payment Status
 */
public enum ListPaymentsAuditV3StatusEnum {
    ACCEPTED("ACCEPTED"),
    AWAITING_FUNDS("AWAITING_FUNDS"),
    FUNDED("FUNDED"),
    UNFUNDED("UNFUNDED"),
    BANK_PAYMENT_REQUESTED("BANK_PAYMENT_REQUESTED"),
    REJECTED("REJECTED"),
    ACCEPTED_BY_RAILS("ACCEPTED_BY_RAILS"),
    CONFIRMED("CONFIRMED"),
    FAILED("FAILED"),
    RETURNED("RETURNED"),
    WITHDRAWN("WITHDRAWN");

    @JsonValue
    public final String value;

    private ListPaymentsAuditV3StatusEnum(String value) {
        this.value = value;
    }
}
