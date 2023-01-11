package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTagRequestsInput {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public UpdateTagRequestsInput withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagInput tag;
    public UpdateTagRequestsInput withTag(openapisdk.models.shared.TagInput tag) {
        this.tag = tag;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.TagInput tag1;
    public UpdateTagRequestsInput withTag1(openapisdk.models.shared.TagInput tag1) {
        this.tag1 = tag1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public UpdateTagRequestsInput withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}