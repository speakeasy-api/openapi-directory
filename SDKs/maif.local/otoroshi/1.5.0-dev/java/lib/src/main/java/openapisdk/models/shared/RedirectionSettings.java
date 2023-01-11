package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RedirectionSettings
 * The configuration for redirection per service
**/
public class RedirectionSettings {
    @JsonProperty("code")
    public Integer code;
    public RedirectionSettings withCode(Integer code) {
        this.code = code;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public RedirectionSettings withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("to")
    public String to;
    public RedirectionSettings withTo(String to) {
        this.to = to;
        return this;
    }
}