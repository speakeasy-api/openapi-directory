/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * IssuesListSortEnum - What to sort results by.
 */
public enum IssuesListSortEnum {
    CREATED("created"),
    UPDATED("updated"),
    COMMENTS("comments");

    @JsonValue
    public final String value;

    private IssuesListSortEnum(String value) {
        this.value = value;
    }
}
