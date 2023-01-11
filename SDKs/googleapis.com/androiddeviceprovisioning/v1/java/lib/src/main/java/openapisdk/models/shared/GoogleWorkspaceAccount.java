package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleWorkspaceAccount
 * A Google Workspace customer.
**/
public class GoogleWorkspaceAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerId")
    public String customerId;
    public GoogleWorkspaceAccount withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preProvisioningTokens")
    public String[] preProvisioningTokens;
    public GoogleWorkspaceAccount withPreProvisioningTokens(String[] preProvisioningTokens) {
        this.preProvisioningTokens = preProvisioningTokens;
        return this;
    }
}