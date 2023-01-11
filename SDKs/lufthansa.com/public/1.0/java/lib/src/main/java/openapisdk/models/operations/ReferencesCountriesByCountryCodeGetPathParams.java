package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesCountriesByCountryCodeGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryCode")
    public String countryCode;
    public ReferencesCountriesByCountryCodeGetPathParams withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
}