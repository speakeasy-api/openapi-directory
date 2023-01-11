package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CountriesGetV2CountriesCountryIdGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country_id")
    public String countryId;
    public CountriesGetV2CountriesCountryIdGetPathParams withCountryId(String countryId) {
        this.countryId = countryId;
        return this;
    }
}