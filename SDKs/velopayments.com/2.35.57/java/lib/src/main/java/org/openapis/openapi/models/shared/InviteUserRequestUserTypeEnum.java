/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * InviteUserRequestUserTypeEnum - Will default to PAYOR if not provided but entityId is provided
 */
public enum InviteUserRequestUserTypeEnum {
    BACKOFFICE("BACKOFFICE"),
    PAYOR("PAYOR"),
    PAYEE("PAYEE");

    @JsonValue
    public final String value;

    private InviteUserRequestUserTypeEnum(String value) {
        this.value = value;
    }
}
