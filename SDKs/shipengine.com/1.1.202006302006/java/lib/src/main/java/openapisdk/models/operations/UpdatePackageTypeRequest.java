package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePackageTypeRequest {
    public UpdatePackageTypePathParams pathParams;
    public UpdatePackageTypeRequest withPathParams(UpdatePackageTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePackageTypeRequestBody request;
    public UpdatePackageTypeRequest withRequest(openapisdk.models.shared.UpdatePackageTypeRequestBody request) {
        this.request = request;
        return this;
    }
}