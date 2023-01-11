package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostV05SessionsRequests {
    @SpeakeasyMetadata("request:mediaType=application/xml")
    public byte[] applicationXML;
    public PostV05SessionsRequests withApplicationXml(byte[] applicationXML) {
        this.applicationXML = applicationXML;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SessionRequest sessionRequest;
    public PostV05SessionsRequests withSessionRequest(openapisdk.models.shared.SessionRequest sessionRequest) {
        this.sessionRequest = sessionRequest;
        return this;
    }
}