package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveDrivesInsertRequest {
    public DriveDrivesInsertQueryParams queryParams;
    public DriveDrivesInsertRequest withQueryParams(DriveDrivesInsertQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Drive request;
    public DriveDrivesInsertRequest withRequest(openapisdk.models.shared.Drive request) {
        this.request = request;
        return this;
    }
    public DriveDrivesInsertSecurity security;
    public DriveDrivesInsertRequest withSecurity(DriveDrivesInsertSecurity security) {
        this.security = security;
        return this;
    }
}