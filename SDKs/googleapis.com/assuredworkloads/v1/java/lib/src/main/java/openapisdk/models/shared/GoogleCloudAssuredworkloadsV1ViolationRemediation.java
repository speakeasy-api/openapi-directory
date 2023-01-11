package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1ViolationRemediation
 * Represents remediation guidance to resolve compliance violation for AssuredWorkload
**/
public class GoogleCloudAssuredworkloadsV1ViolationRemediation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compliantValues")
    public String[] compliantValues;
    public GoogleCloudAssuredworkloadsV1ViolationRemediation withCompliantValues(String[] compliantValues) {
        this.compliantValues = compliantValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructions")
    public GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions instructions;
    public GoogleCloudAssuredworkloadsV1ViolationRemediation withInstructions(GoogleCloudAssuredworkloadsV1ViolationRemediationInstructions instructions) {
        this.instructions = instructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remediationType")
    public GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum remediationType;
    public GoogleCloudAssuredworkloadsV1ViolationRemediation withRemediationType(GoogleCloudAssuredworkloadsV1ViolationRemediationRemediationTypeEnum remediationType) {
        this.remediationType = remediationType;
        return this;
    }
}