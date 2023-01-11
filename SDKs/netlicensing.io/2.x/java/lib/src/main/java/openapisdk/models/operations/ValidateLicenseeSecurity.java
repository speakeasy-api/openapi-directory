package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateLicenseeSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasicAuth basicAuth;
    public ValidateLicenseeSecurity withBasicAuth(openapisdk.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
}