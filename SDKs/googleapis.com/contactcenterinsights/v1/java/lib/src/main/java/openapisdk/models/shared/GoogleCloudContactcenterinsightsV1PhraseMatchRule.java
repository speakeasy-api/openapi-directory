package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1PhraseMatchRule
 * The data for a phrase match rule.
**/
public class GoogleCloudContactcenterinsightsV1PhraseMatchRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig config;
    public GoogleCloudContactcenterinsightsV1PhraseMatchRule withConfig(GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("negated")
    public Boolean negated;
    public GoogleCloudContactcenterinsightsV1PhraseMatchRule withNegated(Boolean negated) {
        this.negated = negated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public GoogleCloudContactcenterinsightsV1PhraseMatchRule withQuery(String query) {
        this.query = query;
        return this;
    }
}