package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountriesGetV1CountriesCountryIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country_id")
    public String countryId;
    public CountriesGetV1CountriesCountryIdGetPathParams withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
}