package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CommunicationRequest {
    public CommunicationQueryParams queryParams;
    public CommunicationRequest withQueryParams(CommunicationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Post[] request;
    public CommunicationRequest withRequest(openapisdk.models.shared.Post[] request) {
        this.request = request;
        return this;
    }
}