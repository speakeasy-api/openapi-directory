package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSubaccountRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public CreateSubaccountRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object subaccountCreate;
    public CreateSubaccountRequests withSubaccountCreate(Object subaccountCreate) {
        this.subaccountCreate = subaccountCreate;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public CreateSubaccountRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}