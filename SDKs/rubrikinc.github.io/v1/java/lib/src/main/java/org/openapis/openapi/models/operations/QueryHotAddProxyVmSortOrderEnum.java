/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonValue;

/**
 * QueryHotAddProxyVmSortOrderEnum - Sort order, either ascending or descending.
 */
public enum QueryHotAddProxyVmSortOrderEnum {
    ASC("asc"),
    DESC("desc");

    @JsonValue
    public final String value;

    private QueryHotAddProxyVmSortOrderEnum(String value) {
        this.value = value;
    }
}
