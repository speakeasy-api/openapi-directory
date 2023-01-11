package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DriveFilesModifyLabelsRequest {
    public DriveFilesModifyLabelsPathParams pathParams;
    public DriveFilesModifyLabelsRequest withPathParams(DriveFilesModifyLabelsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveFilesModifyLabelsQueryParams queryParams;
    public DriveFilesModifyLabelsRequest withQueryParams(DriveFilesModifyLabelsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ModifyLabelsRequest request;
    public DriveFilesModifyLabelsRequest withRequest(openapisdk.models.shared.ModifyLabelsRequest request) {
        this.request = request;
        return this;
    }
    public DriveFilesModifyLabelsSecurity security;
    public DriveFilesModifyLabelsRequest withSecurity(DriveFilesModifyLabelsSecurity security) {
        this.security = security;
        return this;
    }
}