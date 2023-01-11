package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TransferLocationRequest
 * Request message for AccessControl.TransferLocation.
**/
public class TransferLocationRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationAccount")
    public String destinationAccount;
    public TransferLocationRequest withDestinationAccount(String destinationAccount) {
        this.destinationAccount = destinationAccount;
        return this;
    }
}