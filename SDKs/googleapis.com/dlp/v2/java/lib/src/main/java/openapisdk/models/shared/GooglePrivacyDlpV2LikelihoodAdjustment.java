package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2LikelihoodAdjustment
 * Message for specifying an adjustment to the likelihood of a finding as part of a detection rule.
**/
public class GooglePrivacyDlpV2LikelihoodAdjustment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedLikelihood")
    public GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum fixedLikelihood;
    public GooglePrivacyDlpV2LikelihoodAdjustment withFixedLikelihood(GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihoodEnum fixedLikelihood) {
        this.fixedLikelihood = fixedLikelihood;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relativeLikelihood")
    public Integer relativeLikelihood;
    public GooglePrivacyDlpV2LikelihoodAdjustment withRelativeLikelihood(Integer relativeLikelihood) {
        this.relativeLikelihood = relativeLikelihood;
        return this;
    }
}