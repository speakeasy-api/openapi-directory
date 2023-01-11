package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrieveSubaccountSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasicAuth basicAuth;
    public RetrieveSubaccountSecurity withBasicAuth(openapisdk.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
}