package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UtilizationReportInput
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
**/
public class UtilizationReportInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UtilizationReportInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public UtilizationReportInput withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeFrame")
    public UtilizationReportTimeFrameEnum timeFrame;
    public UtilizationReportInput withTimeFrame(UtilizationReportTimeFrameEnum timeFrame) {
        this.timeFrame = timeFrame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vms")
    public VmUtilizationInfoInput[] vms;
    public UtilizationReportInput withVms(VmUtilizationInfoInput[] vms) {
        this.vms = vms;
        return this;
    }
}