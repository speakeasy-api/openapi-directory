package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEpisodesInBatchRequest {
    public GetEpisodesInBatchHeaders headers;
    public GetEpisodesInBatchRequest withHeaders(GetEpisodesInBatchHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.GetEpisodesInBatchForm request;
    public GetEpisodesInBatchRequest withRequest(openapisdk.models.shared.GetEpisodesInBatchForm request) {
        this.request = request;
        return this;
    }
}