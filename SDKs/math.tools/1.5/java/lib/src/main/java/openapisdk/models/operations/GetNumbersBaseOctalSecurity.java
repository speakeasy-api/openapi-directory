package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNumbersBaseOctalSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeXMathtoolsApiSecret xMathtoolsApiSecret;
    public GetNumbersBaseOctalSecurity withXMathtoolsApiSecret(openapisdk.models.shared.SchemeXMathtoolsApiSecret xMathtoolsApiSecret) {
        this.xMathtoolsApiSecret = xMathtoolsApiSecret;
        return this;
    }
}