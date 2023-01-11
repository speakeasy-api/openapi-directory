package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1ExactMatchConfig
 * Exact match configuration.
**/
public class GoogleCloudContactcenterinsightsV1ExactMatchConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseSensitive")
    public Boolean caseSensitive;
    public GoogleCloudContactcenterinsightsV1ExactMatchConfig withCaseSensitive(Boolean caseSensitive) {
        this.caseSensitive = caseSensitive;
        return this;
    }
}