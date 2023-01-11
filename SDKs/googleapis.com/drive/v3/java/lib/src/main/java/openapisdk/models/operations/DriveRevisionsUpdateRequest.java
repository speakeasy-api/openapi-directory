package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveRevisionsUpdateRequest {
    public DriveRevisionsUpdatePathParams pathParams;
    public DriveRevisionsUpdateRequest withPathParams(DriveRevisionsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveRevisionsUpdateQueryParams queryParams;
    public DriveRevisionsUpdateRequest withQueryParams(DriveRevisionsUpdateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Revision request;
    public DriveRevisionsUpdateRequest withRequest(openapisdk.models.shared.Revision request) {
        this.request = request;
        return this;
    }
    public DriveRevisionsUpdateSecurity security;
    public DriveRevisionsUpdateRequest withSecurity(DriveRevisionsUpdateSecurity security) {
        this.security = security;
        return this;
    }
}