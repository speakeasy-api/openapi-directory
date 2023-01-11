package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEarningsByEarningCodeSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemePaylocityAuth paylocityAuth;
    public GetEarningsByEarningCodeSecurity withPaylocityAuth(openapisdk.models.shared.SchemePaylocityAuth paylocityAuth) {
        this.paylocityAuth = paylocityAuth;
        return this;
    }
}