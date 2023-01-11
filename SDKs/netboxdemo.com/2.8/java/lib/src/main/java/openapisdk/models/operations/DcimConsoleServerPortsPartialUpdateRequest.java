package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortsPartialUpdateRequest {
    public DcimConsoleServerPortsPartialUpdatePathParams pathParams;
    public DcimConsoleServerPortsPartialUpdateRequest withPathParams(DcimConsoleServerPortsPartialUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsoleServerPortInput request;
    public DcimConsoleServerPortsPartialUpdateRequest withRequest(openapisdk.models.shared.WritableConsoleServerPortInput request) {
        this.request = request;
        return this;
    }
}