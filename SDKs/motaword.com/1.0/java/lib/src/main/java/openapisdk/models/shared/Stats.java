package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Stats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client")
    public ClientStats client;
    public Stats withClient(ClientStats client) {
        this.client = client;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vendor")
    public VendorStats vendor;
    public Stats withVendor(VendorStats vendor) {
        this.vendor = vendor;
        return this;
    }
}