/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class ReposListBranchesForHeadCommitResponse {
    
    public String contentType;

    public ReposListBranchesForHeadCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public ReposListBranchesForHeadCommitResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public ReposListBranchesForHeadCommitResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.BranchShort[] branchShorts;

    public ReposListBranchesForHeadCommitResponse withBranchShorts(org.openapis.openapi.models.shared.BranchShort[] branchShorts) {
        this.branchShorts = branchShorts;
        return this;
    }
    
    /**
     * Validation failed
     */
    
    public org.openapis.openapi.models.shared.ValidationError validationError;

    public ReposListBranchesForHeadCommitResponse withValidationError(org.openapis.openapi.models.shared.ValidationError validationError) {
        this.validationError = validationError;
        return this;
    }
    
    public ReposListBranchesForHeadCommitResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
