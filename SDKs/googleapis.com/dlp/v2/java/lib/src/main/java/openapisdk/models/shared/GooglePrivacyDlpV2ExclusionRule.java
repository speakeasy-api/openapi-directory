package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2ExclusionRule
 * The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.
**/
public class GooglePrivacyDlpV2ExclusionRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dictionary")
    public GooglePrivacyDlpV2Dictionary dictionary;
    public GooglePrivacyDlpV2ExclusionRule withDictionary(GooglePrivacyDlpV2Dictionary dictionary) {
        this.dictionary = dictionary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeByHotword")
    public GooglePrivacyDlpV2ExcludeByHotword excludeByHotword;
    public GooglePrivacyDlpV2ExclusionRule withExcludeByHotword(GooglePrivacyDlpV2ExcludeByHotword excludeByHotword) {
        this.excludeByHotword = excludeByHotword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludeInfoTypes")
    public GooglePrivacyDlpV2ExcludeInfoTypes excludeInfoTypes;
    public GooglePrivacyDlpV2ExclusionRule withExcludeInfoTypes(GooglePrivacyDlpV2ExcludeInfoTypes excludeInfoTypes) {
        this.excludeInfoTypes = excludeInfoTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("matchingType")
    public GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum matchingType;
    public GooglePrivacyDlpV2ExclusionRule withMatchingType(GooglePrivacyDlpV2ExclusionRuleMatchingTypeEnum matchingType) {
        this.matchingType = matchingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public GooglePrivacyDlpV2Regex regex;
    public GooglePrivacyDlpV2ExclusionRule withRegex(GooglePrivacyDlpV2Regex regex) {
        this.regex = regex;
        return this;
    }
}