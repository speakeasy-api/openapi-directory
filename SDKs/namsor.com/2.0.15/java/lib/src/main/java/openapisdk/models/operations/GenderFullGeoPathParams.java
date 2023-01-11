package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenderFullGeoPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=countryIso2")
    public String countryIso2;
    public GenderFullGeoPathParams withCountryIso2(String countryIso2) {
        this.countryIso2 = countryIso2;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fullName")
    public String fullName;
    public GenderFullGeoPathParams withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
}