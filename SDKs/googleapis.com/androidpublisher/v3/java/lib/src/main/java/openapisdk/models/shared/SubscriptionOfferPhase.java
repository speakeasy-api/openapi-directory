package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SubscriptionOfferPhase
 * A single phase of a subscription offer.
**/
public class SubscriptionOfferPhase {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public SubscriptionOfferPhase withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherRegionsConfig")
    public OtherRegionsSubscriptionOfferPhaseConfig otherRegionsConfig;
    public SubscriptionOfferPhase withOtherRegionsConfig(OtherRegionsSubscriptionOfferPhaseConfig otherRegionsConfig) {
        this.otherRegionsConfig = otherRegionsConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrenceCount")
    public Integer recurrenceCount;
    public SubscriptionOfferPhase withRecurrenceCount(Integer recurrenceCount) {
        this.recurrenceCount = recurrenceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("regionalConfigs")
    public RegionalSubscriptionOfferPhaseConfig[] regionalConfigs;
    public SubscriptionOfferPhase withRegionalConfigs(RegionalSubscriptionOfferPhaseConfig[] regionalConfigs) {
        this.regionalConfigs = regionalConfigs;
        return this;
    }
}