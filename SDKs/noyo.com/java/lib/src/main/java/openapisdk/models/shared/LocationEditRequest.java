package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LocationEditRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public LocationEditRequestAddress address;
    public LocationEditRequest withAddress(LocationEditRequestAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing_location")
    public Boolean billingLocation;
    public LocationEditRequest withBillingLocation(Boolean billingLocation) {
        this.billingLocation = billingLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;
    public LocationEditRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_location")
    public Boolean primaryLocation;
    public LocationEditRequest withPrimaryLocation(Boolean primaryLocation) {
        this.primaryLocation = primaryLocation;
        return this;
    }
}