package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConsentStatusResponse200
 * Body of the JSON response for a successful get status request for a consent.
**/
public class ConsentStatusResponse200 {
    @JsonProperty("consentStatus")
    public ConsentStatusEnum consentStatus;
    public ConsentStatusResponse200 withConsentStatus(ConsentStatusEnum consentStatus) {
        this.consentStatus = consentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public ConsentStatusResponse200 withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
}