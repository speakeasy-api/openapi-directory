/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * ValidateAttestationOccurrenceResponseResultEnum - The result of the Attestation validation.
 */
public enum ValidateAttestationOccurrenceResponseResultEnum {
    RESULT_UNSPECIFIED("RESULT_UNSPECIFIED"),
    VERIFIED("VERIFIED"),
    ATTESTATION_NOT_VERIFIABLE("ATTESTATION_NOT_VERIFIABLE");

    @JsonValue
    public final String value;

    private ValidateAttestationOccurrenceResponseResultEnum(String value) {
        this.value = value;
    }
}
