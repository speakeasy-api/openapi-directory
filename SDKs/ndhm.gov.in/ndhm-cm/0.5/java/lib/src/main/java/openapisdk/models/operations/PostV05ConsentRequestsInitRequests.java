package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentRequestsInitRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05ConsentRequestsInitRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ConsentRequest consentRequest;
    public PostV05ConsentRequestsInitRequests withConsentRequest(openapisdk.models.shared.ConsentRequest consentRequest) {
        this.consentRequest = consentRequest;
        return this;
    }
}