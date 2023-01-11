package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLabelByExternalShipmentIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_shipment_id")
    public String externalShipmentId;
    public GetLabelByExternalShipmentIdPathParams withExternalShipmentId(String externalShipmentId) {
        this.externalShipmentId = externalShipmentId;
        return this;
    }
}