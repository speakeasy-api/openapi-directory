package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvertiserBillingConfig
 * Billing related settings of an advertiser.
**/
public class AdvertiserBillingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingProfileId")
    public String billingProfileId;
    public AdvertiserBillingConfig withBillingProfileId(String billingProfileId) {
        this.billingProfileId = billingProfileId;
        return this;
    }
}