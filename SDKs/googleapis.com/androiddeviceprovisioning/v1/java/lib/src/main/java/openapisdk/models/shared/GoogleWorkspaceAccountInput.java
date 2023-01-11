package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleWorkspaceAccountInput
 * A Google Workspace customer.
**/
public class GoogleWorkspaceAccountInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public GoogleWorkspaceAccountInput withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
}