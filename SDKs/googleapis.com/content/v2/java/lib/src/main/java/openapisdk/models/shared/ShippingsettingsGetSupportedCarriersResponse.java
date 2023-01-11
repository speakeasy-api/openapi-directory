package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShippingsettingsGetSupportedCarriersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("carriers")
    public CarriersCarrier[] carriers;
    public ShippingsettingsGetSupportedCarriersResponse withCarriers(CarriersCarrier[] carriers) {
        this.carriers = carriers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public ShippingsettingsGetSupportedCarriersResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}