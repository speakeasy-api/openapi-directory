/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListCatalogResponse - Success
 */
public class ListCatalogResponse {
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursor")
    public String cursor;

    public ListCatalogResponse withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    
    /**
     * Any errors that occurred during the request.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;

    public ListCatalogResponse withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    
    /**
     * The CatalogObjects returned.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objects")
    public CatalogObject[] objects;

    public ListCatalogResponse withObjects(CatalogObject[] objects) {
        this.objects = objects;
        return this;
    }
    
    public ListCatalogResponse(){}
}
