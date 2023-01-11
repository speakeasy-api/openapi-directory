package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2HotwordRule
 * The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
**/
public class GooglePrivacyDlpV2HotwordRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hotwordRegex")
    public GooglePrivacyDlpV2Regex hotwordRegex;
    public GooglePrivacyDlpV2HotwordRule withHotwordRegex(GooglePrivacyDlpV2Regex hotwordRegex) {
        this.hotwordRegex = hotwordRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likelihoodAdjustment")
    public GooglePrivacyDlpV2LikelihoodAdjustment likelihoodAdjustment;
    public GooglePrivacyDlpV2HotwordRule withLikelihoodAdjustment(GooglePrivacyDlpV2LikelihoodAdjustment likelihoodAdjustment) {
        this.likelihoodAdjustment = likelihoodAdjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proximity")
    public GooglePrivacyDlpV2Proximity proximity;
    public GooglePrivacyDlpV2HotwordRule withProximity(GooglePrivacyDlpV2Proximity proximity) {
        this.proximity = proximity;
        return this;
    }
}