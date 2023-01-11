package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AuthorisationConfirmationResponse
 * Body of the JSON response for an authorisation confirmation request.
**/
public class AuthorisationConfirmationResponse {
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public AuthorisationConfirmationResponse withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public AuthorisationConfirmationResponse withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonProperty("scaStatus")
    public ScaStatusAuthorisationConfirmationEnum scaStatus;
    public AuthorisationConfirmationResponse withScaStatus(ScaStatusAuthorisationConfirmationEnum scaStatus) {
        this.scaStatus = scaStatus;
        return this;
    }
}