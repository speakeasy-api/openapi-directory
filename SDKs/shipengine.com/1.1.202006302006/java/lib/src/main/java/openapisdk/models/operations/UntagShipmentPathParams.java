package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagShipmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipment_id")
    public String shipmentId;
    public UntagShipmentPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_name")
    public String tagName;
    public UntagShipmentPathParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}