package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RetrievePricingCountryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public RetrievePricingCountryQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_secret")
    public String apiSecret;
    public RetrievePricingCountryQueryParams withApiSecret(String apiSecret) {
        this.apiSecret = apiSecret;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public RetrievePricingCountryQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
}