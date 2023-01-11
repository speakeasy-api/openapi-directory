package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassifyImageUrlWithNoStoreRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public ClassifyImageUrlWithNoStoreRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageUrl imageUrl;
    public ClassifyImageUrlWithNoStoreRequests withImageUrl(openapisdk.models.shared.ImageUrl imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.ImageUrl imageUrl1;
    public ClassifyImageUrlWithNoStoreRequests withImageUrl1(openapisdk.models.shared.ImageUrl imageUrl1) {
        this.imageUrl1 = imageUrl1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public ClassifyImageUrlWithNoStoreRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}