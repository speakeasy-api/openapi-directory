package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountReference16Ch
 * Reference to an account by either
 *   * IBAN, of a payment accounts, or
 *   * otherAccountIdentification, for payment accounts if there is no IBAN
 * adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
 * 
**/
public class AccountReference16Ch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cashAccountType")
    public String cashAccountType;
    public AccountReference16Ch withCashAccountType(String cashAccountType) {
        this.cashAccountType = cashAccountType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public AccountReference16Ch withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public AccountReference16Ch withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otherAccountIdentification")
    public String otherAccountIdentification;
    public AccountReference16Ch withOtherAccountIdentification(String otherAccountIdentification) {
        this.otherAccountIdentification = otherAccountIdentification;
        return this;
    }
}