package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SigningBasketResponse201
 * Body of the JSON response for a successful create signing basket request.
**/
public class SigningBasketResponse201 {
    @JsonProperty("_links")
    public LinksSigningBasket links;
    public SigningBasketResponse201 withLinks(LinksSigningBasket links) {
        this.links = links;
        return this;
    }
    @JsonProperty("basketId")
    public String basketId;
    public SigningBasketResponse201 withBasketId(String basketId) {
        this.basketId = basketId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challengeData")
    public ChallengeData challengeData;
    public SigningBasketResponse201 withChallengeData(ChallengeData challengeData) {
        this.challengeData = challengeData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chosenScaMethod")
    public ChosenScaMethod chosenScaMethod;
    public SigningBasketResponse201 withChosenScaMethod(ChosenScaMethod chosenScaMethod) {
        this.chosenScaMethod = chosenScaMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public SigningBasketResponse201 withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scaMethods")
    public AuthenticationObject[] scaMethods;
    public SigningBasketResponse201 withScaMethods(AuthenticationObject[] scaMethods) {
        this.scaMethods = scaMethods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tppMessages")
    public TppMessage2Xx[] tppMessages;
    public SigningBasketResponse201 withTppMessages(TppMessage2Xx[] tppMessages) {
        this.tppMessages = tppMessages;
        return this;
    }
    @JsonProperty("transactionStatus")
    public TransactionStatusSbsEnum transactionStatus;
    public SigningBasketResponse201 withTransactionStatus(TransactionStatusSbsEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
}