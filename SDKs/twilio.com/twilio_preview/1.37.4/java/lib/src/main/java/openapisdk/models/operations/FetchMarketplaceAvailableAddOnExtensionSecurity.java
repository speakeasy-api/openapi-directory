package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMarketplaceAvailableAddOnExtensionSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeAccountSidAuthToken accountSidAuthToken;
    public FetchMarketplaceAvailableAddOnExtensionSecurity withAccountSidAuthToken(openapisdk.models.shared.SchemeAccountSidAuthToken accountSidAuthToken) {
        this.accountSidAuthToken = accountSidAuthToken;
        return this;
    }
}