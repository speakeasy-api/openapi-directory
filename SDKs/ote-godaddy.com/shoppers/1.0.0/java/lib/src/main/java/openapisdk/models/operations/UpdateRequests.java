package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public UpdateRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object shopperUpdate;
    public UpdateRequests withShopperUpdate(Object shopperUpdate) {
        this.shopperUpdate = shopperUpdate;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public UpdateRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}