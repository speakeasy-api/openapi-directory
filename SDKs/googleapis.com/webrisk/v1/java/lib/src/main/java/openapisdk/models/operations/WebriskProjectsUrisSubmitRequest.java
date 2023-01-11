package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebriskProjectsUrisSubmitRequest {
    public WebriskProjectsUrisSubmitPathParams pathParams;
    public WebriskProjectsUrisSubmitRequest withPathParams(WebriskProjectsUrisSubmitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebriskProjectsUrisSubmitQueryParams queryParams;
    public WebriskProjectsUrisSubmitRequest withQueryParams(WebriskProjectsUrisSubmitQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudWebriskV1SubmitUriRequest request;
    public WebriskProjectsUrisSubmitRequest withRequest(openapisdk.models.shared.GoogleCloudWebriskV1SubmitUriRequest request) {
        this.request = request;
        return this;
    }
    public WebriskProjectsUrisSubmitSecurity security;
    public WebriskProjectsUrisSubmitRequest withSecurity(WebriskProjectsUrisSubmitSecurity security) {
        this.security = security;
        return this;
    }
}