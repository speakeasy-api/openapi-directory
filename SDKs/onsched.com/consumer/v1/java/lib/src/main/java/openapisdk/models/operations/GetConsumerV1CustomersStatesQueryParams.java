package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConsumerV1CustomersStatesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=country")
    public String country;
    public GetConsumerV1CustomersStatesQueryParams withCountry(String country) {
        this.country = country;
        return this;
    }
}