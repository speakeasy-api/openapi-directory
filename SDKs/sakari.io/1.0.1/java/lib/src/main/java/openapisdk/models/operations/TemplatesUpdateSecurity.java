package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TemplatesUpdateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeSakariAuth sakariAuth;
    public TemplatesUpdateSecurity withSakariAuth(openapisdk.models.shared.SchemeSakariAuth sakariAuth) {
        this.sakariAuth = sakariAuth;
        return this;
    }
}