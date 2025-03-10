/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class GetCaseModelAssociationsResponse {
    /**
     * Success
     */
    
    public org.openapis.openapi.models.shared.AssociationResults associationResults;

    public GetCaseModelAssociationsResponse withAssociationResults(org.openapis.openapi.models.shared.AssociationResults associationResults) {
        this.associationResults = associationResults;
        return this;
    }
    
    
    public String contentType;

    public GetCaseModelAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public GetCaseModelAssociationsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public GetCaseModelAssociationsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public GetCaseModelAssociationsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
