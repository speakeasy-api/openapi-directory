package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchHostedNumbersHostedNumberOrderSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public openapisdk.models.shared.SchemeAccountSidAuthToken accountSidAuthToken;
    public FetchHostedNumbersHostedNumberOrderSecurity withAccountSidAuthToken(openapisdk.models.shared.SchemeAccountSidAuthToken accountSidAuthToken) {
        this.accountSidAuthToken = accountSidAuthToken;
        return this;
    }
}