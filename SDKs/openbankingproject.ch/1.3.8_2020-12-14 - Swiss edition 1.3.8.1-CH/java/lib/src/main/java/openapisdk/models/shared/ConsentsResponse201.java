package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConsentsResponse201
 * Body of the JSON response for a successful consent request.
**/
public class ConsentsResponse201 {
    @JsonProperty("_links")
    public java.util.Map<String, HrefType> links;
    public ConsentsResponse201 withLinks(java.util.Map<String, HrefType> links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeData")
    public ChallengeData challengeData;
    public ConsentsResponse201 withChallengeData(ChallengeData challengeData) {
        this.challengeData = challengeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chosenScaMethod")
    public ChosenScaMethod chosenScaMethod;
    public ConsentsResponse201 withChosenScaMethod(ChosenScaMethod chosenScaMethod) {
        this.chosenScaMethod = chosenScaMethod;
        return this;
    }
    @JsonProperty("consentId")
    public String consentId;
    public ConsentsResponse201 withConsentId(String consentId) {
        this.consentId = consentId;
        return this;
    }
    @JsonProperty("consentStatus")
    public ConsentStatusEnum consentStatus;
    public ConsentsResponse201 withConsentStatus(ConsentStatusEnum consentStatus) {
        this.consentStatus = consentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public ConsentsResponse201 withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaMethods")
    public AuthenticationObject[] scaMethods;
    public ConsentsResponse201 withScaMethods(AuthenticationObject[] scaMethods) {
        this.scaMethods = scaMethods;
        return this;
    }
}