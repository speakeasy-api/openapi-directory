package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RecordConversationRequest {
    public String serverURL;
    public RecordConversationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public RecordConversationPathParams pathParams;
    public RecordConversationRequest withPathParams(RecordConversationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RecordConversationRequestBody request;
    public RecordConversationRequest withRequest(RecordConversationRequestBody request) {
        this.request = request;
        return this;
    }
}