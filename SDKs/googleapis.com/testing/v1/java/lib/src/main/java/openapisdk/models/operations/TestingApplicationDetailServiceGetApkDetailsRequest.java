package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestingApplicationDetailServiceGetApkDetailsRequest {
    public TestingApplicationDetailServiceGetApkDetailsQueryParams queryParams;
    public TestingApplicationDetailServiceGetApkDetailsRequest withQueryParams(TestingApplicationDetailServiceGetApkDetailsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FileReference request;
    public TestingApplicationDetailServiceGetApkDetailsRequest withRequest(openapisdk.models.shared.FileReference request) {
        this.request = request;
        return this;
    }
    public TestingApplicationDetailServiceGetApkDetailsSecurity security;
    public TestingApplicationDetailServiceGetApkDetailsRequest withSecurity(TestingApplicationDetailServiceGetApkDetailsSecurity security) {
        this.security = security;
        return this;
    }
}