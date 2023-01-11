package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLicenseTemplatesSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeBasicAuth basicAuth;
    public ListLicenseTemplatesSecurity withBasicAuth(openapisdk.models.shared.SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
}