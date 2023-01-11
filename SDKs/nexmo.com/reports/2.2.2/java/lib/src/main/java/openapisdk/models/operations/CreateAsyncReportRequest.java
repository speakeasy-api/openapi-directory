package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAsyncReportRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public CreateAsyncReportRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
    public CreateAsyncReportSecurity security;
    public CreateAsyncReportRequest withSecurity(CreateAsyncReportSecurity security) {
        this.security = security;
        return this;
    }
}