package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostMaintenanceRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Maintenance request;
    public PostMaintenanceRequest withRequest(openapisdk.models.shared.Maintenance request) {
        this.request = request;
        return this;
    }
}