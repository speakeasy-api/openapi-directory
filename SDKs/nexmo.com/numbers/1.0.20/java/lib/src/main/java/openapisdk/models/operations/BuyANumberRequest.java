package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BuyANumberRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public openapisdk.models.shared.NumberDetails request;
    public BuyANumberRequest withRequest(openapisdk.models.shared.NumberDetails request) {
        this.request = request;
        return this;
    }
}