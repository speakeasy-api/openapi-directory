/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

public enum UserBindingEnumBindingTypeEnum {
    GCM("gcm"),
    APN("apn"),
    FCM("fcm");

    @JsonValue
    public final String value;

    private UserBindingEnumBindingTypeEnum(String value) {
        this.value = value;
    }
}
