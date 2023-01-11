package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentRequestsStatusRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05ConsentRequestsStatusRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConsentRequestStatusRequest consentRequestStatusRequest;
    public PostV05ConsentRequestsStatusRequests withConsentRequestStatusRequest(openapisdk.models.shared.ConsentRequestStatusRequest consentRequestStatusRequest) {
        this.consentRequestStatusRequest = consentRequestStatusRequest;
        return this;
    }
}