/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.net.http.HttpResponse;

public class FirebaserulesProjectsRulesetsCreateResponse {
    
    public String contentType;

    public FirebaserulesProjectsRulesetsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    
    /**
     * Successful response
     */
    
    public org.openapis.openapi.models.shared.Ruleset ruleset;

    public FirebaserulesProjectsRulesetsCreateResponse withRuleset(org.openapis.openapi.models.shared.Ruleset ruleset) {
        this.ruleset = ruleset;
        return this;
    }
    
    
    public Integer statusCode;

    public FirebaserulesProjectsRulesetsCreateResponse withStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    
    
    public HttpResponse<byte[]> rawResponse;

    public FirebaserulesProjectsRulesetsCreateResponse withRawResponse(HttpResponse<byte[]> rawResponse) {
        this.rawResponse = rawResponse;
        return this;
    }
    
    public FirebaserulesProjectsRulesetsCreateResponse(@JsonProperty("ContentType") String contentType, @JsonProperty("StatusCode") Integer statusCode) {
        this.contentType = contentType;
        this.statusCode = statusCode;
  }
}
