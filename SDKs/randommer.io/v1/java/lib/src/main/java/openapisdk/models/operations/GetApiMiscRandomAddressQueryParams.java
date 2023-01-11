package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiMiscRandomAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=culture")
    public String culture;
    public GetApiMiscRandomAddressQueryParams withCulture(String culture) {
        this.culture = culture;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public Integer number;
    public GetApiMiscRandomAddressQueryParams withNumber(Integer number) {
        this.number = number;
        return this;
    }
}