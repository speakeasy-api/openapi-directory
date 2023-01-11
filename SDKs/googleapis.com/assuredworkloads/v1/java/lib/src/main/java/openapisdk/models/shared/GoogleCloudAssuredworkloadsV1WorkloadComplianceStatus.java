package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus
 * Represents the Compliance Status of this workload
**/
public class GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acknowledgedViolationCount")
    public Integer acknowledgedViolationCount;
    public GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus withAcknowledgedViolationCount(Integer acknowledgedViolationCount) {
        this.acknowledgedViolationCount = acknowledgedViolationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeViolationCount")
    public Integer activeViolationCount;
    public GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus withActiveViolationCount(Integer activeViolationCount) {
        this.activeViolationCount = activeViolationCount;
        return this;
    }
}