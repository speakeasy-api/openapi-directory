package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagShipmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=shipment_id")
    public String shipmentId;
    public TagShipmentPathParams withShipmentId(String shipmentId) {
        this.shipmentId = shipmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=tag_name")
    public String tagName;
    public TagShipmentPathParams withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}