/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class VaultMattersHoldsRemoveHeldAccountsResponse {
    
    public String contentType;

    public VaultMattersHoldsRemoveHeldAccountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.RemoveHeldAccountsResponse removeHeldAccountsResponse;

    public VaultMattersHoldsRemoveHeldAccountsResponse withRemoveHeldAccountsResponse(org.openapis.openapi.models.shared.RemoveHeldAccountsResponse removeHeldAccountsResponse) {
        this.removeHeldAccountsResponse = removeHeldAccountsResponse;
        return this;
    }
    
    
    public Integer statusCode;

    public VaultMattersHoldsRemoveHeldAccountsResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public VaultMattersHoldsRemoveHeldAccountsResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public VaultMattersHoldsRemoveHeldAccountsResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
