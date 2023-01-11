package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveTargetedPublishersRequest
 * A request to stop targeting publishers in a specific configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
**/
public class RemoveTargetedPublishersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherIds")
    public String[] publisherIds;
    public RemoveTargetedPublishersRequest withPublisherIds(String[] publisherIds) {
        this.publisherIds = publisherIds;
        return this;
    }
}