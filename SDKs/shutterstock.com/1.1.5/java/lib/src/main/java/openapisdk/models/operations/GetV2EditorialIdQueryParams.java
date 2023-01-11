package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetV2EditorialIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetV2EditorialIdQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
}