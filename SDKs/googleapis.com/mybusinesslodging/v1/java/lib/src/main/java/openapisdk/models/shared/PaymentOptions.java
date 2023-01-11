package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentOptions
 * Forms of payment accepted at the property.
**/
public class PaymentOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash")
    public Boolean cash;
    public PaymentOptions withCash(Boolean cash) {
        this.cash = cash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashException")
    public PaymentOptionsCashExceptionEnum cashException;
    public PaymentOptions withCashException(PaymentOptionsCashExceptionEnum cashException) {
        this.cashException = cashException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cheque")
    public Boolean cheque;
    public PaymentOptions withCheque(Boolean cheque) {
        this.cheque = cheque;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chequeException")
    public PaymentOptionsChequeExceptionEnum chequeException;
    public PaymentOptions withChequeException(PaymentOptionsChequeExceptionEnum chequeException) {
        this.chequeException = chequeException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditCard")
    public Boolean creditCard;
    public PaymentOptions withCreditCard(Boolean creditCard) {
        this.creditCard = creditCard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creditCardException")
    public PaymentOptionsCreditCardExceptionEnum creditCardException;
    public PaymentOptions withCreditCardException(PaymentOptionsCreditCardExceptionEnum creditCardException) {
        this.creditCardException = creditCardException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitCard")
    public Boolean debitCard;
    public PaymentOptions withDebitCard(Boolean debitCard) {
        this.debitCard = debitCard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debitCardException")
    public PaymentOptionsDebitCardExceptionEnum debitCardException;
    public PaymentOptions withDebitCardException(PaymentOptionsDebitCardExceptionEnum debitCardException) {
        this.debitCardException = debitCardException;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileNfc")
    public Boolean mobileNfc;
    public PaymentOptions withMobileNfc(Boolean mobileNfc) {
        this.mobileNfc = mobileNfc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileNfcException")
    public PaymentOptionsMobileNfcExceptionEnum mobileNfcException;
    public PaymentOptions withMobileNfcException(PaymentOptionsMobileNfcExceptionEnum mobileNfcException) {
        this.mobileNfcException = mobileNfcException;
        return this;
    }
}