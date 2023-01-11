package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SigningBasketResponse200
 * Body of the JSON response for a successful get signing basket request.
 * 
 *   * 'payments': payment initiations which shall be authorised through this signing basket.
 *   * 'consents': consent objects which shall be authorised through this signing basket.
 *   * 'transactionStatus': Only the codes RCVD, ACTC, RJCT are used.
 *   * '_links': The ASPSP might integrate hyperlinks to indicate next (authorisation) steps to be taken.
 * 
**/
public class SigningBasketResponse200 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public LinksSigningBasket links;
    public SigningBasketResponse200 withLinks(LinksSigningBasket links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consents")
    public String[] consents;
    public SigningBasketResponse200 withConsents(String[] consents) {
        this.consents = consents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payments")
    public String[] payments;
    public SigningBasketResponse200 withPayments(String[] payments) {
        this.payments = payments;
        return this;
    }
    @JsonProperty("transactionStatus")
    public TransactionStatusSbsEnum transactionStatus;
    public SigningBasketResponse200 withTransactionStatus(TransactionStatusSbsEnum transactionStatus) {
        this.transactionStatus = transactionStatus;
        return this;
    }
}