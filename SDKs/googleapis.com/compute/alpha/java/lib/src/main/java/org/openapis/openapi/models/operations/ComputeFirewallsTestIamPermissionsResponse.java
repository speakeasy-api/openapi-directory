/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ComputeFirewallsTestIamPermissionsResponse {
    
    public String contentType;

    public ComputeFirewallsTestIamPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ComputeFirewallsTestIamPermissionsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ComputeFirewallsTestIamPermissionsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.TestPermissionsResponse testPermissionsResponse;

    public ComputeFirewallsTestIamPermissionsResponse withTestPermissionsResponse(org.openapis.openapi.models.shared.TestPermissionsResponse testPermissionsResponse) {
        this.testPermissionsResponse = testPermissionsResponse;
        return this;
    }
    
    public ComputeFirewallsTestIamPermissionsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
