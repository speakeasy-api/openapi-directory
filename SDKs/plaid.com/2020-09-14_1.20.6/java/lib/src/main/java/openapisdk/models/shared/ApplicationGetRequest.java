package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ApplicationGetRequest
 * ApplicationGetResponse defines the schema for `/application/get`
**/
public class ApplicationGetRequest {
    @JsonProperty("application_id")
    public String applicationId;
    public ApplicationGetRequest withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonProperty("client_id")
    public String clientId;
    public ApplicationGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("secret")
    public String secret;
    public ApplicationGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}