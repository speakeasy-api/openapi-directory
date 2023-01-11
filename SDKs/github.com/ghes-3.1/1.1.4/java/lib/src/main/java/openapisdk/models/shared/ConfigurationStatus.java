package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConfigurationStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress")
    public ConfigurationStatusProgress[] progress;
    public ConfigurationStatus withProgress(ConfigurationStatusProgress[] progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public ConfigurationStatus withStatus(String status) {
        this.status = status;
        return this;
    }
}