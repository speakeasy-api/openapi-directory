package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchPhoneNumberCountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IsoCountry")
    public String isoCountry;
    public FetchPhoneNumberCountryPathParams withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
}