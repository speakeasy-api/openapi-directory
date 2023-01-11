package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ValidationAuthority
 * Settings to access a validation authority server
**/
public class ValidationAuthority {
    @JsonProperty("alwaysValid")
    public Boolean alwaysValid;
    public ValidationAuthority withAlwaysValid(Boolean alwaysValid) {
        this.alwaysValid = alwaysValid;
        return this;
    }
    @JsonProperty("badTtl")
    public Long badTtl;
    public ValidationAuthority withBadTtl(Long badTtl) {
        this.badTtl = badTtl;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public ValidationAuthority withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("goodTtl")
    public Long goodTtl;
    public ValidationAuthority withGoodTtl(Long goodTtl) {
        this.goodTtl = goodTtl;
        return this;
    }
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public ValidationAuthority withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("host")
    public String host;
    public ValidationAuthority withHost(String host) {
        this.host = host;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ValidationAuthority withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("method")
    public String method;
    public ValidationAuthority withMethod(String method) {
        this.method = method;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ValidationAuthority withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("noCache")
    public Boolean noCache;
    public ValidationAuthority withNoCache(Boolean noCache) {
        this.noCache = noCache;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public ValidationAuthority withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonProperty("timeout")
    public Long timeout;
    public ValidationAuthority withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ValidationAuthority withUrl(String url) {
        this.url = url;
        return this;
    }
}