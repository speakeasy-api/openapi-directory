/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

public enum SendEmailConfirmation200ApplicationJSONStatusEnum {
    SUCCESS("success"),
    ALREADY_CONFIRMED("already_confirmed");

    @JsonValue
    public final String value;

    private SendEmailConfirmation200ApplicationJSONStatusEnum(String value) {
        this.value = value;
    }
}
