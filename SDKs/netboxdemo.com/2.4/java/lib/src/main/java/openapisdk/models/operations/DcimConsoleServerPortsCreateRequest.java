package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsoleServerPortsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsoleServerPortInput request;
    public DcimConsoleServerPortsCreateRequest withRequest(openapisdk.models.shared.WritableConsoleServerPortInput request) {
        this.request = request;
        return this;
    }
}