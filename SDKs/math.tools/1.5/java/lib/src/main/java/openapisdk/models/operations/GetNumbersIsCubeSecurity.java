package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersIsCubeSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeXMathtoolsApiSecret xMathtoolsApiSecret;
    public GetNumbersIsCubeSecurity withXMathtoolsApiSecret(openapisdk.models.shared.SchemeXMathtoolsApiSecret xMathtoolsApiSecret) {
        this.xMathtoolsApiSecret = xMathtoolsApiSecret;
        return this;
    }
}