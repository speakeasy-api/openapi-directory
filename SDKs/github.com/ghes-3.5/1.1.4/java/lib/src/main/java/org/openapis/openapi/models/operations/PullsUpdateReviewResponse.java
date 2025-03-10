/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class PullsUpdateReviewResponse {
    
    public String contentType;

    public PullsUpdateReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public PullsUpdateReviewResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public PullsUpdateReviewResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    /**
     * Response
     */
    
    public org.openapis.openapi.models.shared.PullRequestReview pullRequestReview;

    public PullsUpdateReviewResponse withPullRequestReview(org.openapis.openapi.models.shared.PullRequestReview pullRequestReview) {
        this.pullRequestReview = pullRequestReview;
        return this;
    }
    
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    
    public org.openapis.openapi.models.shared.ValidationErrorSimple validationErrorSimple;

    public PullsUpdateReviewResponse withValidationErrorSimple(org.openapis.openapi.models.shared.ValidationErrorSimple validationErrorSimple) {
        this.validationErrorSimple = validationErrorSimple;
        return this;
    }
    
    public PullsUpdateReviewResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
