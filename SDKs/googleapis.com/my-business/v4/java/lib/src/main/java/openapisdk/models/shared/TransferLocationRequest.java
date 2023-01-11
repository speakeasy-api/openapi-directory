package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransferLocationRequest
 * Request message for Locations.TransferLocation.
**/
public class TransferLocationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toAccount")
    public String toAccount;
    public TransferLocationRequest withToAccount(String toAccount) {
        this.toAccount = toAccount;
        return this;
    }
}