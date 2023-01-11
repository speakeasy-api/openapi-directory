package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05PatientsProfileShareRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05PatientsProfileShareRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ShareProfileRequest shareProfileRequest;
    public PostV05PatientsProfileShareRequests withShareProfileRequest(openapisdk.models.shared.ShareProfileRequest shareProfileRequest) {
        this.shareProfileRequest = shareProfileRequest;
        return this;
    }
}