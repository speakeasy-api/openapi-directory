package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLabelFromShipmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipment_id")
    public String shipmentId;
    public CreateLabelFromShipmentPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}