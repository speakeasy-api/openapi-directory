/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class DfareportingPlacementGroupsUpdateResponse {
    
    public String contentType;

    public DfareportingPlacementGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.PlacementGroup placementGroup;

    public DfareportingPlacementGroupsUpdateResponse withPlacementGroup(org.openapis.openapi.models.shared.PlacementGroup placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    
    
    public Integer statusCode;

    public DfareportingPlacementGroupsUpdateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public DfareportingPlacementGroupsUpdateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public DfareportingPlacementGroupsUpdateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
