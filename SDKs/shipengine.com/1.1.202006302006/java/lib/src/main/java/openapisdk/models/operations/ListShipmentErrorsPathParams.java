package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListShipmentErrorsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipment_id")
    public String shipmentId;
    public ListShipmentErrorsPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}