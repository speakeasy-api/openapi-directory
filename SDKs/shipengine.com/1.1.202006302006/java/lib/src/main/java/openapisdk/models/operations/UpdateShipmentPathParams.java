package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShipmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipment_id")
    public String shipmentId;
    public UpdateShipmentPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}