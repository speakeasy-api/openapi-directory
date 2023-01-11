package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TemplatesCreateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeSakariAuth sakariAuth;
    public TemplatesCreateSecurity withSakariAuth(openapisdk.models.shared.SchemeSakariAuth sakariAuth) {
        this.sakariAuth = sakariAuth;
        return this;
    }
}