package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchTrunkingCountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IsoCountry")
    public String isoCountry;
    public FetchTrunkingCountryPathParams withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
}