/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResendTokenRequest - The type of token to resend
 */
public class ResendTokenRequest {
    /**
     * The type of the token to resend
     */
    @JsonProperty("tokenType")
    public ResendTokenRequestTokenTypeEnum tokenType;

    public ResendTokenRequest withTokenType(ResendTokenRequestTokenTypeEnum tokenType) {
        this.tokenType = tokenType;
        return this;
    }
    
    /**
     * &lt;p&gt;Optional property that MUST be suppied when manually verifying a user&lt;/p&gt;
     * &lt;p&gt;The user's smsNumber is registered via a separate endpoint and an OTP sent to them&lt;/p&gt;
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationCode")
    public String verificationCode;

    public ResendTokenRequest withVerificationCode(String verificationCode) {
        this.verificationCode = verificationCode;
        return this;
    }
    
    public ResendTokenRequest(@JsonProperty("tokenType") ResendTokenRequestTokenTypeEnum tokenType) {
        this.tokenType = tokenType;
  }
}
