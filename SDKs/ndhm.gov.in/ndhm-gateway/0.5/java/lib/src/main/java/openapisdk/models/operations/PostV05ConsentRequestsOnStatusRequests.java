package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05ConsentRequestsOnStatusRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05ConsentRequestsOnStatusRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.HiuConsentRequestStatus hiuConsentRequestStatus;
    public PostV05ConsentRequestsOnStatusRequests withHiuConsentRequestStatus(openapisdk.models.shared.HiuConsentRequestStatus hiuConsentRequestStatus) {
        this.hiuConsentRequestStatus = hiuConsentRequestStatus;
        return this;
    }
}