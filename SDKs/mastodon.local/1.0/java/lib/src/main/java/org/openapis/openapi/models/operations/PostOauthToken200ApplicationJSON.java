/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostOauthToken200ApplicationJSON - Store this access_token for later use with auth-required methods. The token should be passed as an HTTP Authorization header when making API calls, with the value Bearer access_token
 */
public class PostOauthToken200ApplicationJSON {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("access_token")
    public String accessToken;

    public PostOauthToken200ApplicationJSON withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * UNIX timestamp
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public Long createdAt;

    public PostOauthToken200ApplicationJSON withCreatedAt(Long createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;

    public PostOauthToken200ApplicationJSON withScope(String scope) {
        this.scope = scope;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_type")
    public String tokenType;

    public PostOauthToken200ApplicationJSON withTokenType(String tokenType) {
        this.tokenType = tokenType;
        return this;
    }
    
    public PostOauthToken200ApplicationJSON(){}
}
