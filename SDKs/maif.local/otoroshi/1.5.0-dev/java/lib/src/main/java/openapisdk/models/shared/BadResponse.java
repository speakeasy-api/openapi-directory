package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BadResponse
 * An HTTP response that is not supposed to be returned by a service
**/
public class BadResponse {
    @JsonProperty("body")
    public String body;
    public BadResponse withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("headers")
    public java.util.Map<String, String> headers;
    public BadResponse withHeaders(java.util.Map<String, String> headers) {
        this.headers = headers;
        return this;
    }
    @JsonProperty("status")
    public Integer status;
    public BadResponse withStatus(Integer status) {
        this.status = status;
        return this;
    }
}