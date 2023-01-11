package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup
 * A message representing a rule in the phrase matcher.
**/
public class GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseMatchRules")
    public GoogleCloudContactcenterinsightsV1PhraseMatchRule[] phraseMatchRules;
    public GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup withPhraseMatchRules(GoogleCloudContactcenterinsightsV1PhraseMatchRule[] phraseMatchRules) {
        this.phraseMatchRules = phraseMatchRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum type;
    public GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup withType(GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum type) {
        this.type = type;
        return this;
    }
}