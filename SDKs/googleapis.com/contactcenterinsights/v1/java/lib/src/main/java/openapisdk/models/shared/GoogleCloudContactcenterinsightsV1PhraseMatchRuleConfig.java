package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig
 * Configuration information of a phrase match rule.
**/
public class GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exactMatchConfig")
    public GoogleCloudContactcenterinsightsV1ExactMatchConfig exactMatchConfig;
    public GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig withExactMatchConfig(GoogleCloudContactcenterinsightsV1ExactMatchConfig exactMatchConfig) {
        this.exactMatchConfig = exactMatchConfig;
        return this;
    }
}