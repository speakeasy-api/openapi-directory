package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DcimConsolePortsCreateRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WritableConsolePortInput request;
    public DcimConsolePortsCreateRequest withRequest(openapisdk.models.shared.WritableConsolePortInput request) {
        this.request = request;
        return this;
    }
}