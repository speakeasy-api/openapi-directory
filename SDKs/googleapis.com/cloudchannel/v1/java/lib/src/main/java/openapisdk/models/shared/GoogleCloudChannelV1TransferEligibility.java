package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1TransferEligibility
 * Specifies transfer eligibility of a SKU.
**/
public class GoogleCloudChannelV1TransferEligibility {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GoogleCloudChannelV1TransferEligibility withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ineligibilityReason")
    public GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum ineligibilityReason;
    public GoogleCloudChannelV1TransferEligibility withIneligibilityReason(GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum ineligibilityReason) {
        this.ineligibilityReason = ineligibilityReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isEligible")
    public Boolean isEligible;
    public GoogleCloudChannelV1TransferEligibility withIsEligible(Boolean isEligible) {
        this.isEligible = isEligible;
        return this;
    }
}