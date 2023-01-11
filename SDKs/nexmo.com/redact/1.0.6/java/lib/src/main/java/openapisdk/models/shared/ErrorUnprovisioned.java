package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ErrorUnprovisioned
 * Unprovisioned
**/
public class ErrorUnprovisioned {
    @JsonProperty("detail")
    public String detail;
    public ErrorUnprovisioned withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonProperty("instance")
    public String instance;
    public ErrorUnprovisioned withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonProperty("title")
    public String title;
    public ErrorUnprovisioned withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ErrorUnprovisioned withType(String type) {
        this.type = type;
        return this;
    }
}