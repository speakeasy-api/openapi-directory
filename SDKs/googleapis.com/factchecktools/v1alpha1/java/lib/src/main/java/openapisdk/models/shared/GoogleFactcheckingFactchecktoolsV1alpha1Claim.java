package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1Claim
 * Information about the claim.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1Claim {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimDate")
    public String claimDate;
    public GoogleFactcheckingFactchecktoolsV1alpha1Claim withClaimDate(String claimDate) {
        this.claimDate = claimDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimReview")
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview[] claimReview;
    public GoogleFactcheckingFactchecktoolsV1alpha1Claim withClaimReview(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview[] claimReview) {
        this.claimReview = claimReview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimant")
    public String claimant;
    public GoogleFactcheckingFactchecktoolsV1alpha1Claim withClaimant(String claimant) {
        this.claimant = claimant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public GoogleFactcheckingFactchecktoolsV1alpha1Claim withText(String text) {
        this.text = text;
        return this;
    }
}