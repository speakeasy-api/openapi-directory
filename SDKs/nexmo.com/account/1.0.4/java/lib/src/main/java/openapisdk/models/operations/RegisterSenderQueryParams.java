package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterSenderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public RegisterSenderQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_secret")
    public String apiSecret;
    public RegisterSenderQueryParams withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
}