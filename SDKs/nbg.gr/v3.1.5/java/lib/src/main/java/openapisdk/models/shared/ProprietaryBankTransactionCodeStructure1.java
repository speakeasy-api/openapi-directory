package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProprietaryBankTransactionCodeStructure1
 * Set of elements to fully identify a proprietary bank transaction code.
**/
public class ProprietaryBankTransactionCodeStructure1 {
    @JsonProperty("Code")
    public String code;
    public ProprietaryBankTransactionCodeStructure1 withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Issuer")
    public String issuer;
    public ProprietaryBankTransactionCodeStructure1 withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
}