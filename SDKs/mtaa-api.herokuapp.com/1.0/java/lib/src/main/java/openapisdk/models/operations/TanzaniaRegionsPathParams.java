package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TanzaniaRegionsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public TanzaniaRegionsPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}