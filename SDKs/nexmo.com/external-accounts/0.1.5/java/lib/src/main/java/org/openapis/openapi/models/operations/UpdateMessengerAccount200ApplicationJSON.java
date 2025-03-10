/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateMessengerAccount200ApplicationJSON - OK.
 */
public class UpdateMessengerAccount200ApplicationJSON {
    /**
     * The provider access token
     */
    @JsonProperty("access_token")
    public String accessToken;

    public UpdateMessengerAccount200ApplicationJSON withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    
    /**
     * The external api key for this account
     */
    @JsonProperty("api_key")
    public String apiKey;

    public UpdateMessengerAccount200ApplicationJSON withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    
    /**
     * The array of associated application ids
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applications")
    public String[] applications;

    public UpdateMessengerAccount200ApplicationJSON withApplications(String[] applications) {
        this.applications = applications;
        return this;
    }
    
    /**
     * The external identifier for this account. In this case it is the Facebook Page ID.
     */
    @JsonProperty("external_id")
    public String externalId;

    public UpdateMessengerAccount200ApplicationJSON withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    
    /**
     * The account name
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public UpdateMessengerAccount200ApplicationJSON withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The provider (will be `messenger`).
     */
    @JsonProperty("provider")
    public String provider;

    public UpdateMessengerAccount200ApplicationJSON withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    
    public UpdateMessengerAccount200ApplicationJSON(@JsonProperty("access_token") String accessToken, @JsonProperty("api_key") String apiKey, @JsonProperty("external_id") String externalId, @JsonProperty("provider") String provider) {
        this.accessToken = accessToken;
        this.apiKey = apiKey;
        this.externalId = externalId;
        this.provider = provider;
  }
}
