package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2CustomInfoType
 * Custom information type provided by the user. Used to find domain-specific sensitive information configurable to the data in question.
**/
public class GooglePrivacyDlpV2CustomInfoType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detectionRules")
    public GooglePrivacyDlpV2DetectionRule[] detectionRules;
    public GooglePrivacyDlpV2CustomInfoType withDetectionRules(GooglePrivacyDlpV2DetectionRule[] detectionRules) {
        this.detectionRules = detectionRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dictionary")
    public GooglePrivacyDlpV2Dictionary dictionary;
    public GooglePrivacyDlpV2CustomInfoType withDictionary(GooglePrivacyDlpV2Dictionary dictionary) {
        this.dictionary = dictionary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exclusionType")
    public GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum exclusionType;
    public GooglePrivacyDlpV2CustomInfoType withExclusionType(GooglePrivacyDlpV2CustomInfoTypeExclusionTypeEnum exclusionType) {
        this.exclusionType = exclusionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("infoType")
    public GooglePrivacyDlpV2InfoType infoType;
    public GooglePrivacyDlpV2CustomInfoType withInfoType(GooglePrivacyDlpV2InfoType infoType) {
        this.infoType = infoType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likelihood")
    public GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum likelihood;
    public GooglePrivacyDlpV2CustomInfoType withLikelihood(GooglePrivacyDlpV2CustomInfoTypeLikelihoodEnum likelihood) {
        this.likelihood = likelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regex")
    public GooglePrivacyDlpV2Regex regex;
    public GooglePrivacyDlpV2CustomInfoType withRegex(GooglePrivacyDlpV2Regex regex) {
        this.regex = regex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storedType")
    public GooglePrivacyDlpV2StoredType storedType;
    public GooglePrivacyDlpV2CustomInfoType withStoredType(GooglePrivacyDlpV2StoredType storedType) {
        this.storedType = storedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("surrogateType")
    public java.util.Map<String, Object> surrogateType;
    public GooglePrivacyDlpV2CustomInfoType withSurrogateType(java.util.Map<String, Object> surrogateType) {
        this.surrogateType = surrogateType;
        return this;
    }
}