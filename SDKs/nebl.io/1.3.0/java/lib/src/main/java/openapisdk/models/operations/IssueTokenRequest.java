package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IssueTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IssueTokenRequest request;
    public IssueTokenRequest withRequest(openapisdk.models.shared.IssueTokenRequest request) {
        this.request = request;
        return this;
    }
}