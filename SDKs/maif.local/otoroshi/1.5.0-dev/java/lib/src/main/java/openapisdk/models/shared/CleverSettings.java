package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CleverSettings
 * Configuration for CleverCloud client
**/
public class CleverSettings {
    @JsonProperty("consumerKey")
    public String consumerKey;
    public CleverSettings withConsumerKey(String consumerKey) {
        this.consumerKey = consumerKey;
        return this;
    }
    @JsonProperty("consumerSecret")
    public String consumerSecret;
    public CleverSettings withConsumerSecret(String consumerSecret) {
        this.consumerSecret = consumerSecret;
        return this;
    }
    @JsonProperty("orgaId")
    public String orgaId;
    public CleverSettings withOrgaId(String orgaId) {
        this.orgaId = orgaId;
        return this;
    }
    @JsonProperty("secret")
    public String secret;
    public CleverSettings withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonProperty("token")
    public String token;
    public CleverSettings withToken(String token) {
        this.token = token;
        return this;
    }
}