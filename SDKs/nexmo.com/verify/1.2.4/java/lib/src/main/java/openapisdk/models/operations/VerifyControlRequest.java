package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyControlRequest {
    public VerifyControlPathParams pathParams;
    public VerifyControlRequest withPathParams(VerifyControlPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.ControlRequest request;
    public VerifyControlRequest withRequest(openapisdk.models.shared.ControlRequest request) {
        this.request = request;
        return this;
    }
}