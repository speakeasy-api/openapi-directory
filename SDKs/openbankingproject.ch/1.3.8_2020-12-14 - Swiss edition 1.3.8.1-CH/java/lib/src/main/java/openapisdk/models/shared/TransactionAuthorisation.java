package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TransactionAuthorisation
 * Content of the body of a transaction authorisation request
 * 
**/
public class TransactionAuthorisation {
    @JsonProperty("scaAuthenticationData")
    public String scaAuthenticationData;
    public TransactionAuthorisation withScaAuthenticationData(String scaAuthenticationData) {
        this.scaAuthenticationData = scaAuthenticationData;
        return this;
    }
}