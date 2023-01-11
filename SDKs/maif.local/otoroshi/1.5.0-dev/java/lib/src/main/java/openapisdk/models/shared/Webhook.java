package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Webhook
 * A callback URL where events are posted
**/
public class Webhook {
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public Webhook withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Webhook withUrl(String url) {
        this.url = url;
        return this;
    }
}