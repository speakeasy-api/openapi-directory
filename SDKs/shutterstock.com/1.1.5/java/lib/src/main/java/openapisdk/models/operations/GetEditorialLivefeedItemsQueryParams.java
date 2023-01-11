package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialLivefeedItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetEditorialLivefeedItemsQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
}