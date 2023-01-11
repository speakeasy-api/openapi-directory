package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PolicyCompliance
 * Policy compliance of the creative for a transaction type or a region.
**/
public class PolicyCompliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PolicyComplianceStatusEnum status;
    public PolicyCompliance withStatus(PolicyComplianceStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topics")
    public PolicyTopicEntry[] topics;
    public PolicyCompliance withTopics(PolicyTopicEntry[] topics) {
        this.topics = topics;
        return this;
    }
}