/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum RegistrationSupportedPrivacyEnum {
    CONTACT_PRIVACY_UNSPECIFIED("CONTACT_PRIVACY_UNSPECIFIED"),
    PUBLIC_CONTACT_DATA("PUBLIC_CONTACT_DATA"),
    PRIVATE_CONTACT_DATA("PRIVATE_CONTACT_DATA"),
    REDACTED_CONTACT_DATA("REDACTED_CONTACT_DATA");

    @JsonValue
    public final String value;

    private RegistrationSupportedPrivacyEnum(String value) {
        this.value = value;
    }
}
