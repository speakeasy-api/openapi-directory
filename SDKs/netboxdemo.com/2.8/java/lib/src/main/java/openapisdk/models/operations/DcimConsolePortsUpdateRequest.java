package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortsUpdateRequest {
    public DcimConsolePortsUpdatePathParams pathParams;
    public DcimConsolePortsUpdateRequest withPathParams(DcimConsolePortsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsolePortInput request;
    public DcimConsolePortsUpdateRequest withRequest(openapisdk.models.shared.WritableConsolePortInput request) {
        this.request = request;
        return this;
    }
}