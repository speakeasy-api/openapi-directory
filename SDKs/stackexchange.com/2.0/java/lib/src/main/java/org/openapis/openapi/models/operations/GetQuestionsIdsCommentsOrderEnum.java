/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * GetQuestionsIdsCommentsOrderEnum
 */
public enum GetQuestionsIdsCommentsOrderEnum {
    DESC("desc"),
    ASC("asc");

    @JsonValue
    public final String value;

    private GetQuestionsIdsCommentsOrderEnum(String value) {
        this.value = value;
    }
}
