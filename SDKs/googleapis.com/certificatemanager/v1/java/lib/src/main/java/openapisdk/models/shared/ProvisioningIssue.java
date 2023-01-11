package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProvisioningIssue
 * Information about issues with provisioning a Managed Certificate.
**/
public class ProvisioningIssue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public ProvisioningIssue withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public ProvisioningIssueReasonEnum reason;
    public ProvisioningIssue withReason(ProvisioningIssueReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}