package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateServiceAccountRequestInput
 * The service account create request.
**/
public class CreateServiceAccountRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountId")
    public String accountId;
    public CreateServiceAccountRequestInput withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAccount")
    public ServiceAccountInput serviceAccount;
    public CreateServiceAccountRequestInput withServiceAccount(ServiceAccountInput serviceAccount) {
        this.serviceAccount = serviceAccount;
        return this;
    }
}