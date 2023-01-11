package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05HealthInformationHipRequestRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05HealthInformationHipRequestRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HipHealthInformationRequest hipHealthInformationRequest;
    public PostV05HealthInformationHipRequestRequests withHipHealthInformationRequest(openapisdk.models.shared.HipHealthInformationRequest hipHealthInformationRequest) {
        this.hipHealthInformationRequest = hipHealthInformationRequest;
        return this;
    }
}