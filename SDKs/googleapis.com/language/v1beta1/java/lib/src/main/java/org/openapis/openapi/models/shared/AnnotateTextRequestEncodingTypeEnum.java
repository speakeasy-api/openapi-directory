/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * AnnotateTextRequestEncodingTypeEnum - The encoding type used by the API to calculate offsets.
 */
public enum AnnotateTextRequestEncodingTypeEnum {
    NONE("NONE"),
    UTF8("UTF8"),
    UTF16("UTF16"),
    UTF32("UTF32");

    @JsonValue
    public final String value;

    private AnnotateTextRequestEncodingTypeEnum(String value) {
        this.value = value;
    }
}
