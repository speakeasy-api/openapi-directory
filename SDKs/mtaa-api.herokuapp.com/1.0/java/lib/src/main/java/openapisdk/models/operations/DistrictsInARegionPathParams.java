package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DistrictsInARegionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public DistrictsInARegionPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public DistrictsInARegionPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}