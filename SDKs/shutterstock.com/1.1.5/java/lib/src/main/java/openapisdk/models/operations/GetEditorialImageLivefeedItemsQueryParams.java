package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEditorialImageLivefeedItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetEditorialImageLivefeedItemsQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
}