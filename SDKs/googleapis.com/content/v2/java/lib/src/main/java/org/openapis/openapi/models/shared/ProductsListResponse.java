/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProductsListResponse - Successful response
 */
public class ProductsListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse".
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;

    public ProductsListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    
    /**
     * The token for the retrieval of the next page of products.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;

    public ProductsListResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resources")
    public Product[] resources;

    public ProductsListResponse withResources(Product[] resources) {
        this.resources = resources;
        return this;
    }
    
    public ProductsListResponse(){}
}
