package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortsUpdateRequest {
    public DcimConsoleServerPortsUpdatePathParams pathParams;
    public DcimConsoleServerPortsUpdateRequest withPathParams(DcimConsoleServerPortsUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsoleServerPortInput request;
    public DcimConsoleServerPortsUpdateRequest withRequest(openapisdk.models.shared.WritableConsoleServerPortInput request) {
        this.request = request;
        return this;
    }
}