package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConfigurationStatusProgress {
    @JsonProperty("key")
    public String key;
    public ConfigurationStatusProgress withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public ConfigurationStatusProgress withStatus(String status) {
        this.status = status;
        return this;
    }
}