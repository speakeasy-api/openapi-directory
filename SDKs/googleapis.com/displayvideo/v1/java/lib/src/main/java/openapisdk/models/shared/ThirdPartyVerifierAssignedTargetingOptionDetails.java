package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ThirdPartyVerifierAssignedTargetingOptionDetails
 * Assigned third party verifier targeting option details. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_THIRD_PARTY_VERIFIER`.
**/
public class ThirdPartyVerifierAssignedTargetingOptionDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adloox")
    public Adloox adloox;
    public ThirdPartyVerifierAssignedTargetingOptionDetails withAdloox(Adloox adloox) {
        this.adloox = adloox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleVerify")
    public DoubleVerify doubleVerify;
    public ThirdPartyVerifierAssignedTargetingOptionDetails withDoubleVerify(DoubleVerify doubleVerify) {
        this.doubleVerify = doubleVerify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integralAdScience")
    public IntegralAdScience integralAdScience;
    public ThirdPartyVerifierAssignedTargetingOptionDetails withIntegralAdScience(IntegralAdScience integralAdScience) {
        this.integralAdScience = integralAdScience;
        return this;
    }
}