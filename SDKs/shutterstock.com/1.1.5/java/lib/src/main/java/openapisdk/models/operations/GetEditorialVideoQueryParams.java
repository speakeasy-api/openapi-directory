package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialVideoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetEditorialVideoQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
}