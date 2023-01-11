package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseFcmDataV1beta1Data
 * Data detailing messaging delivery
**/
public class GoogleFirebaseFcmDataV1beta1Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countMessagesAccepted")
    public String countMessagesAccepted;
    public GoogleFirebaseFcmDataV1beta1Data withCountMessagesAccepted(String countMessagesAccepted) {
        this.countMessagesAccepted = countMessagesAccepted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deliveryPerformancePercents")
    public GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents deliveryPerformancePercents;
    public GoogleFirebaseFcmDataV1beta1Data withDeliveryPerformancePercents(GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents deliveryPerformancePercents) {
        this.deliveryPerformancePercents = deliveryPerformancePercents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageInsightPercents")
    public GoogleFirebaseFcmDataV1beta1MessageInsightPercents messageInsightPercents;
    public GoogleFirebaseFcmDataV1beta1Data withMessageInsightPercents(GoogleFirebaseFcmDataV1beta1MessageInsightPercents messageInsightPercents) {
        this.messageInsightPercents = messageInsightPercents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageOutcomePercents")
    public GoogleFirebaseFcmDataV1beta1MessageOutcomePercents messageOutcomePercents;
    public GoogleFirebaseFcmDataV1beta1Data withMessageOutcomePercents(GoogleFirebaseFcmDataV1beta1MessageOutcomePercents messageOutcomePercents) {
        this.messageOutcomePercents = messageOutcomePercents;
        return this;
    }
}