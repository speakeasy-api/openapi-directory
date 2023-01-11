package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VoiceOfMerchantState
 * Response message for VoiceOfMerchant.GetVoiceOfMerchantState.
**/
public class VoiceOfMerchantState {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complyWithGuidelines")
    public ComplyWithGuidelines complyWithGuidelines;
    public VoiceOfMerchantState withComplyWithGuidelines(ComplyWithGuidelines complyWithGuidelines) {
        this.complyWithGuidelines = complyWithGuidelines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasBusinessAuthority")
    public Boolean hasBusinessAuthority;
    public VoiceOfMerchantState withHasBusinessAuthority(Boolean hasBusinessAuthority) {
        this.hasBusinessAuthority = hasBusinessAuthority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hasVoiceOfMerchant")
    public Boolean hasVoiceOfMerchant;
    public VoiceOfMerchantState withHasVoiceOfMerchant(Boolean hasVoiceOfMerchant) {
        this.hasVoiceOfMerchant = hasVoiceOfMerchant;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resolveOwnershipConflict")
    public java.util.Map<String, Object> resolveOwnershipConflict;
    public VoiceOfMerchantState withResolveOwnershipConflict(java.util.Map<String, Object> resolveOwnershipConflict) {
        this.resolveOwnershipConflict = resolveOwnershipConflict;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verify")
    public Verify verify;
    public VoiceOfMerchantState withVerify(Verify verify) {
        this.verify = verify;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waitForVoiceOfMerchant")
    public java.util.Map<String, Object> waitForVoiceOfMerchant;
    public VoiceOfMerchantState withWaitForVoiceOfMerchant(java.util.Map<String, Object> waitForVoiceOfMerchant) {
        this.waitForVoiceOfMerchant = waitForVoiceOfMerchant;
        return this;
    }
}