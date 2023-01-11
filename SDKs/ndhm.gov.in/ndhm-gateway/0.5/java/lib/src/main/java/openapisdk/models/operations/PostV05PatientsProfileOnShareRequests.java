package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05PatientsProfileOnShareRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05PatientsProfileOnShareRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShareProfileResult shareProfileResult;
    public PostV05PatientsProfileOnShareRequests withShareProfileResult(openapisdk.models.shared.ShareProfileResult shareProfileResult) {
        this.shareProfileResult = shareProfileResult;
        return this;
    }
}