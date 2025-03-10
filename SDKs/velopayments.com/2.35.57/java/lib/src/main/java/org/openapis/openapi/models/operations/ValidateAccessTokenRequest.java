/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.openapis.openapi.utils.SpeakeasyMetadata;

public class ValidateAccessTokenRequest {
    /**
     * An OTP from the user's registered MFA Device
     * 
     */
    @SpeakeasyMetadata("request:mediaType=application/json")
    public org.openapis.openapi.models.shared.AccessTokenValidationRequest accessTokenValidationRequest;

    public ValidateAccessTokenRequest withAccessTokenValidationRequest(org.openapis.openapi.models.shared.AccessTokenValidationRequest accessTokenValidationRequest) {
        this.accessTokenValidationRequest = accessTokenValidationRequest;
        return this;
    }
    
    /**
     * Bearer token authorization leg of validate
     */
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;

    public ValidateAccessTokenRequest withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    
    public ValidateAccessTokenRequest(@JsonProperty("AccessTokenValidationRequest") org.openapis.openapi.models.shared.AccessTokenValidationRequest accessTokenValidationRequest) {
        this.accessTokenValidationRequest = accessTokenValidationRequest;
  }
}
