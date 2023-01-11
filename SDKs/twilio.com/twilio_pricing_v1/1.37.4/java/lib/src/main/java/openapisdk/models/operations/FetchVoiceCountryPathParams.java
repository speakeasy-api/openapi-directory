package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchVoiceCountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IsoCountry")
    public String isoCountry;
    public FetchVoiceCountryPathParams withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
}