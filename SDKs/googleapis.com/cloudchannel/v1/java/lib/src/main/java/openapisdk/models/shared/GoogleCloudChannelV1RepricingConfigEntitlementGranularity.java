package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1RepricingConfigEntitlementGranularity
 * Applies the repricing configuration at the entitlement level.
**/
public class GoogleCloudChannelV1RepricingConfigEntitlementGranularity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entitlement")
    public String entitlement;
    public GoogleCloudChannelV1RepricingConfigEntitlementGranularity withEntitlement(String entitlement) {
        this.entitlement = entitlement;
        return this;
    }
}