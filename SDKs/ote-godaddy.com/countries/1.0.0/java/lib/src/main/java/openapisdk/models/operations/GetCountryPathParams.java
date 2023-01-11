package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryKey")
    public String countryKey;
    public GetCountryPathParams withCountryKey(String countryKey) {
        this.countryKey = countryKey;
        return this;
    }
}