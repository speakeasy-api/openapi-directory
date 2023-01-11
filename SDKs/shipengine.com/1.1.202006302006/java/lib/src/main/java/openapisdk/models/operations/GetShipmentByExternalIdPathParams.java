package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShipmentByExternalIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_shipment_id")
    public String externalShipmentId;
    public GetShipmentByExternalIdPathParams withExternalShipmentId(String externalShipmentId) {
        this.externalShipmentId = externalShipmentId;
        return this;
    }
}