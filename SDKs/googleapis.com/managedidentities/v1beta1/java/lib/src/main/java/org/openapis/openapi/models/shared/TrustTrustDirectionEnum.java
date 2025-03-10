/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * TrustTrustDirectionEnum - The trust direction, which decides if the current domain is trusted, trusting, or both.
 */
public enum TrustTrustDirectionEnum {
    TRUST_DIRECTION_UNSPECIFIED("TRUST_DIRECTION_UNSPECIFIED"),
    INBOUND("INBOUND"),
    OUTBOUND("OUTBOUND"),
    BIDIRECTIONAL("BIDIRECTIONAL");

    @JsonValue
    public final String value;

    private TrustTrustDirectionEnum(String value) {
        this.value = value;
    }
}
