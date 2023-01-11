package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateAddressRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddressToValidate[] request;
    public ValidateAddressRequest withRequest(openapisdk.models.shared.AddressToValidate[] request) {
        this.request = request;
        return this;
    }
}