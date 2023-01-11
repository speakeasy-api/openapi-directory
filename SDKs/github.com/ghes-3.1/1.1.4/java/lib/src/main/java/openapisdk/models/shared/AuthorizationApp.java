package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthorizationApp {
    @JsonProperty("client_id")
    public String clientId;
    public AuthorizationApp withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AuthorizationApp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public AuthorizationApp withUrl(String url) {
        this.url = url;
        return this;
    }
}