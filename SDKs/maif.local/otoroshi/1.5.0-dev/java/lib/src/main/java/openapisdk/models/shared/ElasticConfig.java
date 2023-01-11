package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ElasticConfig
 * The configuration for elastic access
**/
public class ElasticConfig {
    @JsonProperty("clusterUri")
    public String clusterUri;
    public ElasticConfig withClusterUri(String clusterUri) {
        this.clusterUri = clusterUri;
        return this;
    }
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public ElasticConfig withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("index")
    public String index;
    public ElasticConfig withIndex(String index) {
        this.index = index;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public ElasticConfig withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ElasticConfig withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("user")
    public String user;
    public ElasticConfig withUser(String user) {
        this.user = user;
        return this;
    }
}