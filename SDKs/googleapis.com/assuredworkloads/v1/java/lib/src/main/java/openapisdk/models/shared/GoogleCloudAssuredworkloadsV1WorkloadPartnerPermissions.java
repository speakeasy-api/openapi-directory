package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions
 * Permissions granted to the AW Partner SA account for the customer workload
**/
public class GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataLogsViewer")
    public Boolean dataLogsViewer;
    public GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions withDataLogsViewer(Boolean dataLogsViewer) {
        this.dataLogsViewer = dataLogsViewer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remediateFolderViolations")
    public Boolean remediateFolderViolations;
    public GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions withRemediateFolderViolations(Boolean remediateFolderViolations) {
        this.remediateFolderViolations = remediateFolderViolations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccessApprover")
    public Boolean serviceAccessApprover;
    public GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions withServiceAccessApprover(Boolean serviceAccessApprover) {
        this.serviceAccessApprover = serviceAccessApprover;
        return this;
    }
}