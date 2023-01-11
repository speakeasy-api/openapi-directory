package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartScaprocessResponse
 * Body of the JSON response for a Start SCA authorisation request.
**/
public class StartScaprocessResponse {
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public StartScaprocessResponse withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonProperty("authorisationId")
    public String authorisationId;
    public StartScaprocessResponse withAuthorisationId(String authorisationId) {
        this.authorisationId = authorisationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeData")
    public ChallengeData challengeData;
    public StartScaprocessResponse withChallengeData(ChallengeData challengeData) {
        this.challengeData = challengeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chosenScaMethod")
    public ChosenScaMethod chosenScaMethod;
    public StartScaprocessResponse withChosenScaMethod(ChosenScaMethod chosenScaMethod) {
        this.chosenScaMethod = chosenScaMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public StartScaprocessResponse withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaMethods")
    public AuthenticationObject[] scaMethods;
    public StartScaprocessResponse withScaMethods(AuthenticationObject[] scaMethods) {
        this.scaMethods = scaMethods;
        return this;
    }
    @JsonProperty("scaStatus")
    public ScaStatusEnum scaStatus;
    public StartScaprocessResponse withScaStatus(ScaStatusEnum scaStatus) {
        this.scaStatus = scaStatus;
        return this;
    }
}