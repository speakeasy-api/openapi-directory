package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UtilizationReport
 * Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
**/
public class UtilizationReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createTime")
    public String createTime;
    public UtilizationReport withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public UtilizationReport withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public Status error;
    public UtilizationReport withError(Status error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("frameEndTime")
    public String frameEndTime;
    public UtilizationReport withFrameEndTime(String frameEndTime) {
        this.frameEndTime = frameEndTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UtilizationReport withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public UtilizationReportStateEnum state;
    public UtilizationReport withState(UtilizationReportStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateTime")
    public String stateTime;
    public UtilizationReport withStateTime(String stateTime) {
        this.stateTime = stateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timeFrame")
    public UtilizationReportTimeFrameEnum timeFrame;
    public UtilizationReport withTimeFrame(UtilizationReportTimeFrameEnum timeFrame) {
        this.timeFrame = timeFrame;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmCount")
    public Integer vmCount;
    public UtilizationReport withVmCount(Integer vmCount) {
        this.vmCount = vmCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vms")
    public VmUtilizationInfo[] vms;
    public UtilizationReport withVms(VmUtilizationInfo[] vms) {
        this.vms = vms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmsCount")
    public Integer vmsCount;
    public UtilizationReport withVmsCount(Integer vmsCount) {
        this.vmsCount = vmsCount;
        return this;
    }
}