package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationRequestRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05HealthInformationRequestRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiRequest hiRequest;
    public PostV05HealthInformationRequestRequests withHiRequest(openapisdk.models.shared.HiRequest hiRequest) {
        this.hiRequest = hiRequest;
        return this;
    }
}