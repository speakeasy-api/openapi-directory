package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectBillingInfo
 * Encapsulation of billing information for a Google Cloud Console project. A project has at most one associated billing account at a time (but a billing account can be assigned to multiple projects).
**/
public class ProjectBillingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingAccountName")
    public String billingAccountName;
    public ProjectBillingInfo withBillingAccountName(String billingAccountName) {
        this.billingAccountName = billingAccountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingEnabled")
    public Boolean billingEnabled;
    public ProjectBillingInfo withBillingEnabled(Boolean billingEnabled) {
        this.billingEnabled = billingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProjectBillingInfo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public ProjectBillingInfo withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
}