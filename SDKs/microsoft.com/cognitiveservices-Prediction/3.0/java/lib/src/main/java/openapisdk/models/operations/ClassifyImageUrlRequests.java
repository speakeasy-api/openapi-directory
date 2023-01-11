package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImageUrlRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public ClassifyImageUrlRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageUrl imageUrl;
    public ClassifyImageUrlRequests withImageUrl(openapisdk.models.shared.ImageUrl imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.ImageUrl imageUrl1;
    public ClassifyImageUrlRequests withImageUrl1(openapisdk.models.shared.ImageUrl imageUrl1) {
        this.imageUrl1 = imageUrl1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public ClassifyImageUrlRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}