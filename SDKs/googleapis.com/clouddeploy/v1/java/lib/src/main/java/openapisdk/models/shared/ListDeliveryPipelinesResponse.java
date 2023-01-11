package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeliveryPipelinesResponse
 * The response object from `ListDeliveryPipelines`.
**/
public class ListDeliveryPipelinesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryPipelines")
    public DeliveryPipeline[] deliveryPipelines;
    public ListDeliveryPipelinesResponse withDeliveryPipelines(DeliveryPipeline[] deliveryPipelines) {
        this.deliveryPipelines = deliveryPipelines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDeliveryPipelinesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListDeliveryPipelinesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}