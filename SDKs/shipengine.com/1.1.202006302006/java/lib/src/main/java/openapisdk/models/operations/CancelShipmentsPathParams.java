package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelShipmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipment_id")
    public String shipmentId;
    public CancelShipmentsPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}