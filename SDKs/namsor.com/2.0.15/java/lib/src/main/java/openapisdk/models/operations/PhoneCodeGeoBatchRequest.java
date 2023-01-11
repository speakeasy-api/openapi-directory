package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PhoneCodeGeoBatchRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchFirstLastNamePhoneNumberGeoIn request;
    public PhoneCodeGeoBatchRequest withRequest(openapisdk.models.shared.BatchFirstLastNamePhoneNumberGeoIn request) {
        this.request = request;
        return this;
    }
    public PhoneCodeGeoBatchSecurity security;
    public PhoneCodeGeoBatchRequest withSecurity(PhoneCodeGeoBatchSecurity security) {
        this.security = security;
        return this;
    }
}