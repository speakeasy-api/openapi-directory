package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentRequestsOnInitRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05ConsentRequestsOnInitRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConsentRequestInitResponse consentRequestInitResponse;
    public PostV05ConsentRequestsOnInitRequests withConsentRequestInitResponse(openapisdk.models.shared.ConsentRequestInitResponse consentRequestInitResponse) {
        this.consentRequestInitResponse = consentRequestInitResponse;
        return this;
    }
}