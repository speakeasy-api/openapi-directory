package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PricingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public PricingQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public String format;
    public PricingQueryParams withFormat(String format) {
        this.format = format;
        return this;
    }
}