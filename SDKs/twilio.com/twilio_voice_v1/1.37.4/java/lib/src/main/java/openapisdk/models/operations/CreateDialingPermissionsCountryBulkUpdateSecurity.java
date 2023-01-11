package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDialingPermissionsCountryBulkUpdateSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeAccountSidAuthToken accountSidAuthToken;
    public CreateDialingPermissionsCountryBulkUpdateSecurity withAccountSidAuthToken(openapisdk.models.shared.SchemeAccountSidAuthToken accountSidAuthToken) {
        this.accountSidAuthToken = accountSidAuthToken;
        return this;
    }
}