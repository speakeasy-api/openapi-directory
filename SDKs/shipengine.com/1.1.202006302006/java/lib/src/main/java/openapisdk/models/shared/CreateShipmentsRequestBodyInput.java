package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateShipmentsRequestBodyInput
 * A create shipments request body
**/
public class CreateShipmentsRequestBodyInput {
    @JsonProperty("shipments")
    public AddressValidatingShipmentInput[] shipments;
    public CreateShipmentsRequestBodyInput withShipments(AddressValidatingShipmentInput[] shipments) {
        this.shipments = shipments;
        return this;
    }
}