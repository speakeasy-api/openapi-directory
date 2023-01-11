package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudSecuritycenterV1ExternalSystem
 * Representation of third party SIEM/SOAR fields within SCC.
**/
public class GoogleCloudSecuritycenterV1ExternalSystem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assignees")
    public String[] assignees;
    public GoogleCloudSecuritycenterV1ExternalSystem withAssignees(String[] assignees) {
        this.assignees = assignees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalSystemUpdateTime")
    public String externalSystemUpdateTime;
    public GoogleCloudSecuritycenterV1ExternalSystem withExternalSystemUpdateTime(String externalSystemUpdateTime) {
        this.externalSystemUpdateTime = externalSystemUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("externalUid")
    public String externalUid;
    public GoogleCloudSecuritycenterV1ExternalSystem withExternalUid(String externalUid) {
        this.externalUid = externalUid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudSecuritycenterV1ExternalSystem withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GoogleCloudSecuritycenterV1ExternalSystem withStatus(String status) {
        this.status = status;
        return this;
    }
}