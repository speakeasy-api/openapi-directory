/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * BloggerBlogsGetByUrlViewEnum
 */
public enum BloggerBlogsGetByUrlViewEnum {
    VIEW_TYPE_UNSPECIFIED("VIEW_TYPE_UNSPECIFIED"),
    READER("READER"),
    AUTHOR("AUTHOR"),
    ADMIN("ADMIN");

    @JsonValue
    public final String value;

    private BloggerBlogsGetByUrlViewEnum(String value) {
        this.value = value;
    }
}
