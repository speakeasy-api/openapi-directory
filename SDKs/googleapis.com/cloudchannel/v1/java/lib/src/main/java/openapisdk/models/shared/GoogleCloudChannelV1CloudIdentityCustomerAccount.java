package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CloudIdentityCustomerAccount
 * Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.
**/
public class GoogleCloudChannelV1CloudIdentityCustomerAccount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerCloudIdentityId")
    public String customerCloudIdentityId;
    public GoogleCloudChannelV1CloudIdentityCustomerAccount withCustomerCloudIdentityId(String customerCloudIdentityId) {
        this.customerCloudIdentityId = customerCloudIdentityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerName")
    public String customerName;
    public GoogleCloudChannelV1CloudIdentityCustomerAccount withCustomerName(String customerName) {
        this.customerName = customerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("existing")
    public Boolean existing;
    public GoogleCloudChannelV1CloudIdentityCustomerAccount withExisting(Boolean existing) {
        this.existing = existing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owned")
    public Boolean owned;
    public GoogleCloudChannelV1CloudIdentityCustomerAccount withOwned(Boolean owned) {
        this.owned = owned;
        return this;
    }
}