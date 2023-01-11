package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudChannelV1CustomerConstraints
 * Represents constraints required to purchase the Offer for a customer.
**/
public class GoogleCloudChannelV1CustomerConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedCustomerTypes")
    public GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum[] allowedCustomerTypes;
    public GoogleCloudChannelV1CustomerConstraints withAllowedCustomerTypes(GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum[] allowedCustomerTypes) {
        this.allowedCustomerTypes = allowedCustomerTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowedRegions")
    public String[] allowedRegions;
    public GoogleCloudChannelV1CustomerConstraints withAllowedRegions(String[] allowedRegions) {
        this.allowedRegions = allowedRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promotionalOrderTypes")
    public GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum[] promotionalOrderTypes;
    public GoogleCloudChannelV1CustomerConstraints withPromotionalOrderTypes(GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum[] promotionalOrderTypes) {
        this.promotionalOrderTypes = promotionalOrderTypes;
        return this;
    }
}