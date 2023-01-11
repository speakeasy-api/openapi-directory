package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCveCheckConfigurationRequestBody
 * CVE check config
**/
public class UpdateCveCheckConfigurationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiKey")
    public String apiKey;
    public UpdateCveCheckConfigurationRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public UpdateCveCheckConfigurationRequestBody withUrl(String url) {
        this.url = url;
        return this;
    }
}