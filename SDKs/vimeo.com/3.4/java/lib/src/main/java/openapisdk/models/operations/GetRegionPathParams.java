package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRegionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public GetRegionPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
}