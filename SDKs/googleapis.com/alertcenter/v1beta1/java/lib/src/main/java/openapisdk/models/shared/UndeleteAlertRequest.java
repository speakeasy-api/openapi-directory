package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UndeleteAlertRequest
 * A request to undelete a specific alert that was marked for deletion.
**/
public class UndeleteAlertRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public UndeleteAlertRequest withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}