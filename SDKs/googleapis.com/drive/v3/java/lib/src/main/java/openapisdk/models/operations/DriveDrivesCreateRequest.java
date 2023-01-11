package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesCreateRequest {
    public DriveDrivesCreateQueryParams queryParams;
    public DriveDrivesCreateRequest withQueryParams(DriveDrivesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Drive request;
    public DriveDrivesCreateRequest withRequest(openapisdk.models.shared.Drive request) {
        this.request = request;
        return this;
    }
    public DriveDrivesCreateSecurity security;
    public DriveDrivesCreateRequest withSecurity(DriveDrivesCreateSecurity security) {
        this.security = security;
        return this;
    }
}