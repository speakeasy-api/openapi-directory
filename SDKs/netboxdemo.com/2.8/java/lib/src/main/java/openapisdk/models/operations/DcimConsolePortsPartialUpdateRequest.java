package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortsPartialUpdateRequest {
    public DcimConsolePortsPartialUpdatePathParams pathParams;
    public DcimConsolePortsPartialUpdateRequest withPathParams(DcimConsolePortsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsolePortInput request;
    public DcimConsolePortsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableConsolePortInput request) {
        this.request = request;
        return this;
    }
}