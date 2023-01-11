package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShipmentByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipment_id")
    public String shipmentId;
    public GetShipmentByIdPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}