package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEmployeeSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemePaylocityAuth paylocityAuth;
    public GetEmployeeSecurity withPaylocityAuth(openapisdk.models.shared.SchemePaylocityAuth paylocityAuth) {
        this.paylocityAuth = paylocityAuth;
        return this;
    }
}