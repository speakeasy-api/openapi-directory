package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateShipmentsResponseBody
 * A create shipments response body
**/
public class CreateShipmentsResponseBody {
    @JsonProperty("has_errors")
    public Boolean hasErrors;
    public CreateShipmentsResponseBody withHasErrors(Boolean hasErrors) {
        this.hasErrors = hasErrors;
        return this;
    }
    @JsonProperty("shipments")
    public CreateAndValidateShipment[] shipments;
    public CreateShipmentsResponseBody withShipments(CreateAndValidateShipment[] shipments) {
        this.shipments = shipments;
        return this;
    }
}