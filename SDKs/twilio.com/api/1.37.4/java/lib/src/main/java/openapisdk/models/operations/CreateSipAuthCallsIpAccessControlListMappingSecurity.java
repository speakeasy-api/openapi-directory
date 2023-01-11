package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipAuthCallsIpAccessControlListMappingSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeAccountSidAuthToken accountSidAuthToken;
    public CreateSipAuthCallsIpAccessControlListMappingSecurity withAccountSidAuthToken(openapisdk.models.shared.SchemeAccountSidAuthToken accountSidAuthToken) {
        this.accountSidAuthToken = accountSidAuthToken;
        return this;
    }
}