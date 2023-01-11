package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialLivefeedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetEditorialLivefeedQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
}