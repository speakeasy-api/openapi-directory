package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OsPolicyAssignmentReport
 * A report of the OS policy assignment status for a given instance.
**/
public class OsPolicyAssignmentReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instance")
    public String instance;
    public OsPolicyAssignmentReport withInstance(String instance) {
        this.instance = instance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRunId")
    public String lastRunId;
    public OsPolicyAssignmentReport withLastRunId(String lastRunId) {
        this.lastRunId = lastRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OsPolicyAssignmentReport withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyAssignment")
    public String osPolicyAssignment;
    public OsPolicyAssignmentReport withOsPolicyAssignment(String osPolicyAssignment) {
        this.osPolicyAssignment = osPolicyAssignment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("osPolicyCompliances")
    public OsPolicyAssignmentReportOsPolicyCompliance[] osPolicyCompliances;
    public OsPolicyAssignmentReport withOsPolicyCompliances(OsPolicyAssignmentReportOsPolicyCompliance[] osPolicyCompliances) {
        this.osPolicyCompliances = osPolicyCompliances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public OsPolicyAssignmentReport withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
}