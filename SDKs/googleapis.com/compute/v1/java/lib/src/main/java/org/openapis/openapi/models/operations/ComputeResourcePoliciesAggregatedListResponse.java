/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ComputeResourcePoliciesAggregatedListResponse {
    
    public String contentType;

    public ComputeResourcePoliciesAggregatedListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.ResourcePolicyAggregatedList resourcePolicyAggregatedList;

    public ComputeResourcePoliciesAggregatedListResponse withResourcePolicyAggregatedList(org.openapis.openapi.models.shared.ResourcePolicyAggregatedList resourcePolicyAggregatedList) {
        this.resourcePolicyAggregatedList = resourcePolicyAggregatedList;
        return this;
    }
    
    
    public Integer statusCode;

    public ComputeResourcePoliciesAggregatedListResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ComputeResourcePoliciesAggregatedListResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public ComputeResourcePoliciesAggregatedListResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
