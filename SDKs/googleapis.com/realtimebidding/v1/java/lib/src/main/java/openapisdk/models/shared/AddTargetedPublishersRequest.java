package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddTargetedPublishersRequest
 * A request to start targeting the provided publishers in a specific pretargeting configuration. The pretargeting configuration itself specifies how these publishers are targeted in PretargetingConfig.publisherTargeting.
**/
public class AddTargetedPublishersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisherIds")
    public String[] publisherIds;
    public AddTargetedPublishersRequest withPublisherIds(String[] publisherIds) {
        this.publisherIds = publisherIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetingMode")
    public AddTargetedPublishersRequestTargetingModeEnum targetingMode;
    public AddTargetedPublishersRequest withTargetingMode(AddTargetedPublishersRequestTargetingModeEnum targetingMode) {
        this.targetingMode = targetingMode;
        return this;
    }
}