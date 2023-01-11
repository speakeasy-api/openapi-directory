package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AppsCheckAuthorizationAuthorizationApp {
    @JsonProperty("client_id")
    public String clientId;
    public AppsCheckAuthorizationAuthorizationApp withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AppsCheckAuthorizationAuthorizationApp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public AppsCheckAuthorizationAuthorizationApp withUrl(String url) {
        this.url = url;
        return this;
    }
}