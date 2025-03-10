/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class AcmednsAcmeChallengeSetsRotateChallengesResponse {
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.AcmeChallengeSet acmeChallengeSet;

    public AcmednsAcmeChallengeSetsRotateChallengesResponse withAcmeChallengeSet(org.openapis.openapi.models.shared.AcmeChallengeSet acmeChallengeSet) {
        this.acmeChallengeSet = acmeChallengeSet;
        return this;
    }
    
    
    public String contentType;

    public AcmednsAcmeChallengeSetsRotateChallengesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    
    public Integer statusCode;

    public AcmednsAcmeChallengeSetsRotateChallengesResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public AcmednsAcmeChallengeSetsRotateChallengesResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public AcmednsAcmeChallengeSetsRotateChallengesResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
