/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetEditorialCategoriesResponse {
    
    public String contentType;

    public GetEditorialCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * OK
     */
    
    public org.openapis.openapi.models.shared.EditorialCategoryResults editorialCategoryResults;

    public GetEditorialCategoriesResponse withEditorialCategoryResults(org.openapis.openapi.models.shared.EditorialCategoryResults editorialCategoryResults) {
        this.editorialCategoryResults = editorialCategoryResults;
        return this;
    }
    
    
    public Integer statusCode;

    public GetEditorialCategoriesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetEditorialCategoriesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetEditorialCategoriesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
