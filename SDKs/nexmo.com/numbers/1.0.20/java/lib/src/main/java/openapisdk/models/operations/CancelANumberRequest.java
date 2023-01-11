package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelANumberRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.NumberDetails request;
    public CancelANumberRequest withRequest(openapisdk.models.shared.NumberDetails request) {
        this.request = request;
        return this;
    }
}