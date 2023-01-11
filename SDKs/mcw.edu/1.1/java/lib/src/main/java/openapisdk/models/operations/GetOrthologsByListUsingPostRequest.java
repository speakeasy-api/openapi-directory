package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrthologsByListUsingPostRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OrthologRequest request;
    public GetOrthologsByListUsingPostRequest withRequest(openapisdk.models.shared.OrthologRequest request) {
        this.request = request;
        return this;
    }
}