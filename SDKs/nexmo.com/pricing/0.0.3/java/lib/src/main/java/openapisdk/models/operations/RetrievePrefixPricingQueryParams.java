package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrievePrefixPricingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public RetrievePrefixPricingQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_secret")
    public String apiSecret;
    public RetrievePrefixPricingQueryParams withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=prefix")
    public String prefix;
    public RetrievePrefixPricingQueryParams withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
}