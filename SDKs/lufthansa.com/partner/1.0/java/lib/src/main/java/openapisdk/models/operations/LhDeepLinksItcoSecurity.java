package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LhDeepLinksItcoSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeAuth auth;
    public LhDeepLinksItcoSecurity withAuth(openapisdk.models.shared.SchemeAuth auth) {
        this.auth = auth;
        return this;
    }
}