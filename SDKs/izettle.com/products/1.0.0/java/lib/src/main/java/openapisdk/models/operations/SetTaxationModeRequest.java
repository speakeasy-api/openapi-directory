package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetTaxationModeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TaxSettingsUpdateRequest request;
    public SetTaxationModeRequest withRequest(openapisdk.models.shared.TaxSettingsUpdateRequest request) {
        this.request = request;
        return this;
    }
    public SetTaxationModeSecurity security;
    public SetTaxationModeRequest withSecurity(SetTaxationModeSecurity security) {
        this.security = security;
        return this;
    }
}