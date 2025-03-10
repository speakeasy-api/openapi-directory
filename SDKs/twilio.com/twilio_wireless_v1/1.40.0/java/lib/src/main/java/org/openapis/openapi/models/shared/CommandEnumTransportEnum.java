/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * CommandEnumTransportEnum - Only return Commands with this transport value. Can be: `sms` or `ip`.
 */
public enum CommandEnumTransportEnum {
    SMS("sms"),
    IP("ip");

    @JsonValue
    public final String value;

    private CommandEnumTransportEnum(String value) {
        this.value = value;
    }
}
