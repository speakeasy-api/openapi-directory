package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DetectImageUrlRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public DetectImageUrlRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ImageUrl imageUrl;
    public DetectImageUrlRequests withImageUrl(openapisdk.models.shared.ImageUrl imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.ImageUrl imageUrl1;
    public DetectImageUrlRequests withImageUrl1(openapisdk.models.shared.ImageUrl imageUrl1) {
        this.imageUrl1 = imageUrl1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] textXML;
    public DetectImageUrlRequests withTextXml(byte[] textXML) {
        this.textXML = textXML;
        return this;
    }
}