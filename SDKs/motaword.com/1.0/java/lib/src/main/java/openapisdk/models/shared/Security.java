package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public SchemeMwoAuth mwoAuth;
    public Security withMwoAuth(SchemeMwoAuth mwoAuth) {
        this.mwoAuth = mwoAuth;
        return this;
    }
}