package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneCodeBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNamePhoneNumberIn request;
    public PhoneCodeBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNamePhoneNumberIn request) {
        this.request = request;
        return this;
    }
    public PhoneCodeBatchSecurity security;
    public PhoneCodeBatchRequest withSecurity(PhoneCodeBatchSecurity security) {
        this.security = security;
        return this;
    }
}