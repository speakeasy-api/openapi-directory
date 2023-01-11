package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNewCisJobRequest {
    public PostNewCisJobHeaders headers;
    public PostNewCisJobRequest withHeaders(PostNewCisJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CisJobInstructionBase request;
    public PostNewCisJobRequest withRequest(openapisdk.models.shared.CisJobInstructionBase request) {
        this.request = request;
        return this;
    }
}