package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TemplatesRemoveSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeSakariAuth sakariAuth;
    public TemplatesRemoveSecurity withSakariAuth(openapisdk.models.shared.SchemeSakariAuth sakariAuth) {
        this.sakariAuth = sakariAuth;
        return this;
    }
}