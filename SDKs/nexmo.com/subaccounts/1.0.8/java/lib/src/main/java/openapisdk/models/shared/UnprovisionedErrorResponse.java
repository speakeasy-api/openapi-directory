package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UnprovisionedErrorResponse
 * Unprovisioned
**/
public class UnprovisionedErrorResponse {
    @JsonProperty("detail")
    public String detail;
    public UnprovisionedErrorResponse withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public UnprovisionedErrorResponse withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public UnprovisionedErrorResponse withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public UnprovisionedErrorResponse withType(String type) {
        this.type = type;
        return this;
    }
}