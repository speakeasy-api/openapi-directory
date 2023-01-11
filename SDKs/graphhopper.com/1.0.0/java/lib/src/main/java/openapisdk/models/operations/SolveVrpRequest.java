package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SolveVrpRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Request request;
    public SolveVrpRequest withRequest(openapisdk.models.shared.Request request) {
        this.request = request;
        return this;
    }
}