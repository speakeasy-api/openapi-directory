package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchMessagingCountryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IsoCountry")
    public String isoCountry;
    public FetchMessagingCountryPathParams withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
}