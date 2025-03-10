/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * InterconnectOutageNotificationSourceEnum - The party that generated this notification, which can take the following value: - GOOGLE: this notification as generated by Google. Note that the value of NSRC_GOOGLE has been deprecated in favor of GOOGLE.
 */
public enum InterconnectOutageNotificationSourceEnum {
    GOOGLE("GOOGLE"),
    NSRC_GOOGLE("NSRC_GOOGLE");

    @JsonValue
    public final String value;

    private InterconnectOutageNotificationSourceEnum(String value) {
        this.value = value;
    }
}
