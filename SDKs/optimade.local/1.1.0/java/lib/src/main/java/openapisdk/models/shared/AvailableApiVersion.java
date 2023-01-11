package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AvailableApiVersion
 * A JSON object containing information about an available API version
**/
public class AvailableApiVersion {
    @JsonProperty("url")
    public String url;
    public AvailableApiVersion withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public AvailableApiVersion withVersion(String version) {
        this.version = version;
        return this;
    }
}