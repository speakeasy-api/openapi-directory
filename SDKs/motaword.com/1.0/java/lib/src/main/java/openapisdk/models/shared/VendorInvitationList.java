package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VendorInvitationList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendors")
    public VendorWithNeeds[] vendors;
    public VendorInvitationList withVendors(VendorWithNeeds[] vendors) {
        this.vendors = vendors;
        return this;
    }
}