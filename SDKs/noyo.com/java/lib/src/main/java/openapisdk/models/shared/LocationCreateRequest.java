package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LocationCreateRequest {
    @JsonProperty("address")
    public LocationCreateRequestAddress address;
    public LocationCreateRequest withAddress(LocationCreateRequestAddress address) {
        this.address = address;
        return this;
    }
    @JsonProperty("billing_location")
    public Boolean billingLocation;
    public LocationCreateRequest withBillingLocation(Boolean billingLocation) {
        this.billingLocation = billingLocation;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public LocationCreateRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("primary_location")
    public Boolean primaryLocation;
    public LocationCreateRequest withPrimaryLocation(Boolean primaryLocation) {
        this.primaryLocation = primaryLocation;
        return this;
    }
}