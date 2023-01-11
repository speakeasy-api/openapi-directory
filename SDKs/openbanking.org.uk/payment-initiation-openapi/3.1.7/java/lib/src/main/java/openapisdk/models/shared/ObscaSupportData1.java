package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ObscaSupportData1
 * Supporting Data provided by TPP, when requesting SCA Exemption.
**/
public class ObscaSupportData1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppliedAuthenticationApproach")
    public ObscaSupportData1AppliedAuthenticationApproachEnum appliedAuthenticationApproach;
    public ObscaSupportData1 withAppliedAuthenticationApproach(ObscaSupportData1AppliedAuthenticationApproachEnum appliedAuthenticationApproach) {
        this.appliedAuthenticationApproach = appliedAuthenticationApproach;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferencePaymentOrderId")
    public String referencePaymentOrderId;
    public ObscaSupportData1 withReferencePaymentOrderId(String referencePaymentOrderId) {
        this.referencePaymentOrderId = referencePaymentOrderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestedSCAExemptionType")
    public ObscaSupportData1RequestedScaExemptionTypeEnum requestedSCAExemptionType;
    public ObscaSupportData1 withRequestedScaExemptionType(ObscaSupportData1RequestedScaExemptionTypeEnum requestedSCAExemptionType) {
        this.requestedSCAExemptionType = requestedSCAExemptionType;
        return this;
    }
}