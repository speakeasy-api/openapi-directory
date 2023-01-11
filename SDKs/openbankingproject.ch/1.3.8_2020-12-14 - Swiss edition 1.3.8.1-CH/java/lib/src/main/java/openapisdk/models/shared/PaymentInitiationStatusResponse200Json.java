package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitiationStatusResponse200Json
 * Body of the response for a successful payment initiation status request in case of an JSON based endpoint.
**/
public class PaymentInitiationStatusResponse200Json {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fundsAvailable")
    public Boolean fundsAvailable;
    public PaymentInitiationStatusResponse200Json withFundsAvailable(Boolean fundsAvailable) {
        this.fundsAvailable = fundsAvailable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("psuMessage")
    public String psuMessage;
    public PaymentInitiationStatusResponse200Json withPsuMessage(String psuMessage) {
        this.psuMessage = psuMessage;
        return this;
    }
    @JsonProperty("transactionStatus")
    public TransactionStatusEnum transactionStatus;
    public PaymentInitiationStatusResponse200Json withTransactionStatus(TransactionStatusEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
}