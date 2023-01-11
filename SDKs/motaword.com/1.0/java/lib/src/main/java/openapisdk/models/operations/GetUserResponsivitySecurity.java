package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserResponsivitySecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeMwoAuth mwoAuth;
    public GetUserResponsivitySecurity withMwoAuth(openapisdk.models.shared.SchemeMwoAuth mwoAuth) {
        this.mwoAuth = mwoAuth;
        return this;
    }
}