/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * PostFirewallsCreateFirewallRequestApplyToTypeEnum - Type of the resource
 */
public enum PostFirewallsCreateFirewallRequestApplyToTypeEnum {
    SERVER("server"),
    LABEL_SELECTOR("label_selector");

    @JsonValue
    public final String value;

    private PostFirewallsCreateFirewallRequestApplyToTypeEnum(String value) {
        this.value = value;
    }
}
