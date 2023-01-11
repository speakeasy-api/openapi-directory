package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserProjectStatsSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeMwoAuth mwoAuth;
    public GetUserProjectStatsSecurity withMwoAuth(openapisdk.models.shared.SchemeMwoAuth mwoAuth) {
        this.mwoAuth = mwoAuth;
        return this;
    }
}