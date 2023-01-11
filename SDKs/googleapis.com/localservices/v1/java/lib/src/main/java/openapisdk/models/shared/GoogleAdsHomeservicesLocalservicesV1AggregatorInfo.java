package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAdsHomeservicesLocalservicesV1AggregatorInfo
 * Conatiner for aggregator specific information if lead is for an aggregator GLS account.
**/
public class GoogleAdsHomeservicesLocalservicesV1AggregatorInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregatorProviderId")
    public String aggregatorProviderId;
    public GoogleAdsHomeservicesLocalservicesV1AggregatorInfo withAggregatorProviderId(String aggregatorProviderId) {
        this.aggregatorProviderId = aggregatorProviderId;
        return this;
    }
}