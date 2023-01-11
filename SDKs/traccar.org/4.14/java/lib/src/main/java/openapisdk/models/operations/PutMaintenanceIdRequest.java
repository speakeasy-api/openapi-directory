package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutMaintenanceIdRequest {
    public PutMaintenanceIdPathParams pathParams;
    public PutMaintenanceIdRequest withPathParams(PutMaintenanceIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Maintenance request;
    public PutMaintenanceIdRequest withRequest(openapisdk.models.shared.Maintenance request) {
        this.request = request;
        return this;
    }
}