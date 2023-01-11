package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse
 * Response message for CloudChannelService.CheckCloudIdentityAccountsExist.
**/
public class GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudIdentityAccounts")
    public GoogleCloudChannelV1CloudIdentityCustomerAccount[] cloudIdentityAccounts;
    public GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse withCloudIdentityAccounts(GoogleCloudChannelV1CloudIdentityCustomerAccount[] cloudIdentityAccounts) {
        this.cloudIdentityAccounts = cloudIdentityAccounts;
        return this;
    }
}