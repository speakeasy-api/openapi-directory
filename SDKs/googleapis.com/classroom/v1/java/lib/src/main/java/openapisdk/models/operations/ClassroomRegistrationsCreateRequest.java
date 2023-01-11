package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ClassroomRegistrationsCreateRequest {
    public ClassroomRegistrationsCreateQueryParams queryParams;
    public ClassroomRegistrationsCreateRequest withQueryParams(ClassroomRegistrationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Registration request;
    public ClassroomRegistrationsCreateRequest withRequest(openapisdk.models.shared.Registration request) {
        this.request = request;
        return this;
    }
    public ClassroomRegistrationsCreateSecurity security;
    public ClassroomRegistrationsCreateRequest withSecurity(ClassroomRegistrationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}