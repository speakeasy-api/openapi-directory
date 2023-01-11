package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1PhraseMatcherInput
 * The phrase matcher resource.
**/
public class GoogleCloudContactcenterinsightsV1PhraseMatcherInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public GoogleCloudContactcenterinsightsV1PhraseMatcherInput withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudContactcenterinsightsV1PhraseMatcherInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1PhraseMatcherInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseMatchRuleGroups")
    public GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[] phraseMatchRuleGroups;
    public GoogleCloudContactcenterinsightsV1PhraseMatcherInput withPhraseMatchRuleGroups(GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[] phraseMatchRuleGroups) {
        this.phraseMatchRuleGroups = phraseMatchRuleGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleMatch")
    public GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum roleMatch;
    public GoogleCloudContactcenterinsightsV1PhraseMatcherInput withRoleMatch(GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum roleMatch) {
        this.roleMatch = roleMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum type;
    public GoogleCloudContactcenterinsightsV1PhraseMatcherInput withType(GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionTag")
    public String versionTag;
    public GoogleCloudContactcenterinsightsV1PhraseMatcherInput withVersionTag(String versionTag) {
        this.versionTag = versionTag;
        return this;
    }
}