package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TestingProjectsTestMatricesCreateRequest {
    public TestingProjectsTestMatricesCreatePathParams pathParams;
    public TestingProjectsTestMatricesCreateRequest withPathParams(TestingProjectsTestMatricesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TestingProjectsTestMatricesCreateQueryParams queryParams;
    public TestingProjectsTestMatricesCreateRequest withQueryParams(TestingProjectsTestMatricesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TestMatrix request;
    public TestingProjectsTestMatricesCreateRequest withRequest(openapisdk.models.shared.TestMatrix request) {
        this.request = request;
        return this;
    }
    public TestingProjectsTestMatricesCreateSecurity security;
    public TestingProjectsTestMatricesCreateRequest withSecurity(TestingProjectsTestMatricesCreateSecurity security) {
        this.security = security;
        return this;
    }
}