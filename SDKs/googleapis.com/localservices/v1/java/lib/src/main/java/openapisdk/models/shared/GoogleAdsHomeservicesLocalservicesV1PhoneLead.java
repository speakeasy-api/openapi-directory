package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAdsHomeservicesLocalservicesV1PhoneLead
 * Container for phone lead specific information.
**/
public class GoogleAdsHomeservicesLocalservicesV1PhoneLead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargedCallTimestamp")
    public String chargedCallTimestamp;
    public GoogleAdsHomeservicesLocalservicesV1PhoneLead withChargedCallTimestamp(String chargedCallTimestamp) {
        this.chargedCallTimestamp = chargedCallTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargedConnectedCallDurationSeconds")
    public String chargedConnectedCallDurationSeconds;
    public GoogleAdsHomeservicesLocalservicesV1PhoneLead withChargedConnectedCallDurationSeconds(String chargedConnectedCallDurationSeconds) {
        this.chargedConnectedCallDurationSeconds = chargedConnectedCallDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumerPhoneNumber")
    public String consumerPhoneNumber;
    public GoogleAdsHomeservicesLocalservicesV1PhoneLead withConsumerPhoneNumber(String consumerPhoneNumber) {
        this.consumerPhoneNumber = consumerPhoneNumber;
        return this;
    }
}