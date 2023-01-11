package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest
 * Request message for CloudChannelService.CheckCloudIdentityAccountsExist.
**/
public class GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest withDomain(String domain) {
        this.domain = domain;
        return this;
    }
}