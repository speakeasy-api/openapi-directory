package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1PhraseMatcher
 * The phrase matcher resource.
**/
public class GoogleCloudContactcenterinsightsV1PhraseMatcher {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activationUpdateTime")
    public String activationUpdateTime;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withActivationUpdateTime(String activationUpdateTime) {
        this.activationUpdateTime = activationUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phraseMatchRuleGroups")
    public GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[] phraseMatchRuleGroups;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withPhraseMatchRuleGroups(GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup[] phraseMatchRuleGroups) {
        this.phraseMatchRuleGroups = phraseMatchRuleGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionCreateTime")
    public String revisionCreateTime;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withRevisionCreateTime(String revisionCreateTime) {
        this.revisionCreateTime = revisionCreateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisionId")
    public String revisionId;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withRevisionId(String revisionId) {
        this.revisionId = revisionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleMatch")
    public GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum roleMatch;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withRoleMatch(GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum roleMatch) {
        this.roleMatch = roleMatch;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum type;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withType(GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionTag")
    public String versionTag;
    public GoogleCloudContactcenterinsightsV1PhraseMatcher withVersionTag(String versionTag) {
        this.versionTag = versionTag;
        return this;
    }
}