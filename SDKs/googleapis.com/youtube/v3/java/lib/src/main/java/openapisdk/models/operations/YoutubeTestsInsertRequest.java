package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class YoutubeTestsInsertRequest {
    public YoutubeTestsInsertQueryParams queryParams;
    public YoutubeTestsInsertRequest withQueryParams(YoutubeTestsInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestItem request;
    public YoutubeTestsInsertRequest withRequest(openapisdk.models.shared.TestItem request) {
        this.request = request;
        return this;
    }
    public YoutubeTestsInsertSecurity security;
    public YoutubeTestsInsertRequest withSecurity(YoutubeTestsInsertSecurity security) {
        this.security = security;
        return this;
    }
}