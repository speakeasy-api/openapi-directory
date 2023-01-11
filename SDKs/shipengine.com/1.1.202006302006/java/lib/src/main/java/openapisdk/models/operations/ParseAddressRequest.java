package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ParseAddressRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ParseAddressRequestBody request;
    public ParseAddressRequest withRequest(openapisdk.models.shared.ParseAddressRequestBody request) {
        this.request = request;
        return this;
    }
}