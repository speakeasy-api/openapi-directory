package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseFcmDataV1beta1MessageInsightPercents
 * Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.
**/
public class GoogleFirebaseFcmDataV1beta1MessageInsightPercents {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priorityLowered")
    public Float priorityLowered;
    public GoogleFirebaseFcmDataV1beta1MessageInsightPercents withPriorityLowered(Float priorityLowered) {
        this.priorityLowered = priorityLowered;
        return this;
    }
}