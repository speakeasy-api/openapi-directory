package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAllCompanyCodesAndDescriptionsByResourceSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemePaylocityAuth paylocityAuth;
    public GetAllCompanyCodesAndDescriptionsByResourceSecurity withPaylocityAuth(openapisdk.models.shared.SchemePaylocityAuth paylocityAuth) {
        this.paylocityAuth = paylocityAuth;
        return this;
    }
}