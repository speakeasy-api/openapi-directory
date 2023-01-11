package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersBaseSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeXMathtoolsApiSecret xMathtoolsApiSecret;
    public GetNumbersBaseSecurity withXMathtoolsApiSecret(openapisdk.models.shared.SchemeXMathtoolsApiSecret xMathtoolsApiSecret) {
        this.xMathtoolsApiSecret = xMathtoolsApiSecret;
        return this;
    }
}