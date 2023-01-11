package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListShipmentRatesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipment_id")
    public String shipmentId;
    public ListShipmentRatesPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
}