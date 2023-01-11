package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteEarningByEarningCodeAndStartDateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemePaylocityAuth paylocityAuth;
    public DeleteEarningByEarningCodeAndStartDateSecurity withPaylocityAuth(openapisdk.models.shared.SchemePaylocityAuth paylocityAuth) {
        this.paylocityAuth = paylocityAuth;
        return this;
    }
}