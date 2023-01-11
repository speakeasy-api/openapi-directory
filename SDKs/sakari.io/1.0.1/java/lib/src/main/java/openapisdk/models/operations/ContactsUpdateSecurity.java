package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ContactsUpdateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeSakariAuth sakariAuth;
    public ContactsUpdateSecurity withSakariAuth(openapisdk.models.shared.SchemeSakariAuth sakariAuth) {
        this.sakariAuth = sakariAuth;
        return this;
    }
}