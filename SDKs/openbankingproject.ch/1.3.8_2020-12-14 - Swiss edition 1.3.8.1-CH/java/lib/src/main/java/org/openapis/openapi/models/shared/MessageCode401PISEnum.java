/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * MessageCode401PISEnum - Message codes defined for PIS for HTTP Error code 401 (UNAUTHORIZED).
 */
public enum MessageCode401PISEnum {
    CERTIFICATE_INVALID("CERTIFICATE_INVALID"),
    ROLE_INVALID("ROLE_INVALID"),
    CERTIFICATE_EXPIRED("CERTIFICATE_EXPIRED"),
    CERTIFICATE_BLOCKED("CERTIFICATE_BLOCKED"),
    CERTIFICATE_REVOKE("CERTIFICATE_REVOKE"),
    CERTIFICATE_MISSING("CERTIFICATE_MISSING"),
    SIGNATURE_INVALID("SIGNATURE_INVALID"),
    SIGNATURE_MISSING("SIGNATURE_MISSING"),
    CORPORATE_ID_INVALID("CORPORATE_ID_INVALID"),
    PSU_CREDENTIALS_INVALID("PSU_CREDENTIALS_INVALID"),
    CONSENT_INVALID("CONSENT_INVALID"),
    CONSENT_EXPIRED("CONSENT_EXPIRED"),
    TOKEN_UNKNOWN("TOKEN_UNKNOWN"),
    TOKEN_INVALID("TOKEN_INVALID"),
    TOKEN_EXPIRED("TOKEN_EXPIRED"),
    REQUIRED_KID_MISSING("REQUIRED_KID_MISSING");

    @JsonValue
    public final String value;

    private MessageCode401PISEnum(String value) {
        this.value = value;
    }
}
