package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShippingsettingsGetSupportedPickupServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ShippingsettingsGetSupportedPickupServicesResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pickupServices")
    public PickupServicesPickupService[] pickupServices;
    public ShippingsettingsGetSupportedPickupServicesResponse withPickupServices(PickupServicesPickupService[] pickupServices) {
        this.pickupServices = pickupServices;
        return this;
    }
}