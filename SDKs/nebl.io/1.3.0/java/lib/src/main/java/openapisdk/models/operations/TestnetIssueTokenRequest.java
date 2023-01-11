package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestnetIssueTokenRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.IssueTokenRequest request;
    public TestnetIssueTokenRequest withRequest(openapisdk.models.shared.IssueTokenRequest request) {
        this.request = request;
        return this;
    }
}