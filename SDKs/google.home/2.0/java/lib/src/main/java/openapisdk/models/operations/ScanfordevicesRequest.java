package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ScanfordevicesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ScanfordevicesRequest request;
    public ScanfordevicesRequest withRequest(openapisdk.models.shared.ScanfordevicesRequest request) {
        this.request = request;
        return this;
    }
}