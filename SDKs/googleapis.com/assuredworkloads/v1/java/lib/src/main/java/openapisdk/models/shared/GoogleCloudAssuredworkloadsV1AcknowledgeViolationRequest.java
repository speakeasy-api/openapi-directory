package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest
 * Request for acknowledging the violation Next Id: 4
**/
public class GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public String comment;
    public GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nonCompliantOrgPolicy")
    public String nonCompliantOrgPolicy;
    public GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest withNonCompliantOrgPolicy(String nonCompliantOrgPolicy) {
        this.nonCompliantOrgPolicy = nonCompliantOrgPolicy;
        return this;
    }
}