package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WebriskProjectsSubmissionsCreateRequest {
    public WebriskProjectsSubmissionsCreatePathParams pathParams;
    public WebriskProjectsSubmissionsCreateRequest withPathParams(WebriskProjectsSubmissionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public WebriskProjectsSubmissionsCreateQueryParams queryParams;
    public WebriskProjectsSubmissionsCreateRequest withQueryParams(WebriskProjectsSubmissionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GoogleCloudWebriskV1Submission request;
    public WebriskProjectsSubmissionsCreateRequest withRequest(openapisdk.models.shared.GoogleCloudWebriskV1Submission request) {
        this.request = request;
        return this;
    }
    public WebriskProjectsSubmissionsCreateSecurity security;
    public WebriskProjectsSubmissionsCreateRequest withSecurity(WebriskProjectsSubmissionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}