package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiPhoneValidateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CountryCode")
    public String countryCode;
    public GetApiPhoneValidateQueryParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=telephone")
    public String telephone;
    public GetApiPhoneValidateQueryParams withTelephone(String telephone) {
        this.telephone = telephone;
        return this;
    }
}