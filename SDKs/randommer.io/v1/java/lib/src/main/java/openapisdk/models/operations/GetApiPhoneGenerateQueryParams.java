package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiPhoneGenerateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CountryCode")
    public String countryCode;
    public GetApiPhoneGenerateQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Quantity")
    public Integer quantity;
    public GetApiPhoneGenerateQueryParams withQuantity(Integer quantity) {
        this.quantity = quantity;
        return this;
    }
}