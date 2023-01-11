package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CisTransaction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CisTransaction")
    public CisTransactionCisTransaction cisTransaction;
    public CisTransaction withCisTransaction(CisTransactionCisTransaction cisTransaction) {
        this.cisTransaction = cisTransaction;
        return this;
    }
}