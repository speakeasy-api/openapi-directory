package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationCmRequestRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05HealthInformationCmRequestRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiRequest hiRequest;
    public PostV05HealthInformationCmRequestRequests withHiRequest(openapisdk.models.shared.HiRequest hiRequest) {
        this.hiRequest = hiRequest;
        return this;
    }
}