package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PredictImageUrlWithNoStoreRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PredictImageUrlWithNoStoreRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageUrl imageUrl;
    public PredictImageUrlWithNoStoreRequests withImageUrl(openapisdk.models.shared.ImageUrl imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.ImageUrl imageUrl1;
    public PredictImageUrlWithNoStoreRequests withImageUrl1(openapisdk.models.shared.ImageUrl imageUrl1) {
        this.imageUrl1 = imageUrl1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ImageUrl imageUrl2;
    public PredictImageUrlWithNoStoreRequests withImageUrl2(openapisdk.models.shared.ImageUrl imageUrl2) {
        this.imageUrl2 = imageUrl2;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public PredictImageUrlWithNoStoreRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}