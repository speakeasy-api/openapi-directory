package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1ImportCustomerRequest
 * Request message for CloudChannelService.ImportCustomer
**/
public class GoogleCloudChannelV1ImportCustomerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authToken")
    public String authToken;
    public GoogleCloudChannelV1ImportCustomerRequest withAuthToken(String authToken) {
        this.authToken = authToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelPartnerId")
    public String channelPartnerId;
    public GoogleCloudChannelV1ImportCustomerRequest withChannelPartnerId(String channelPartnerId) {
        this.channelPartnerId = channelPartnerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloudIdentityId")
    public String cloudIdentityId;
    public GoogleCloudChannelV1ImportCustomerRequest withCloudIdentityId(String cloudIdentityId) {
        this.cloudIdentityId = cloudIdentityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public GoogleCloudChannelV1ImportCustomerRequest withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public GoogleCloudChannelV1ImportCustomerRequest withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overwriteIfExists")
    public Boolean overwriteIfExists;
    public GoogleCloudChannelV1ImportCustomerRequest withOverwriteIfExists(Boolean overwriteIfExists) {
        this.overwriteIfExists = overwriteIfExists;
        return this;
    }
}