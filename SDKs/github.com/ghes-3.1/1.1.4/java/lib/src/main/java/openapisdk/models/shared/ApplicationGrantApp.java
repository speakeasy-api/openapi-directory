package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ApplicationGrantApp {
    @JsonProperty("client_id")
    public String clientId;
    public ApplicationGrantApp withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ApplicationGrantApp withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ApplicationGrantApp withUrl(String url) {
        this.url = url;
        return this;
    }
}