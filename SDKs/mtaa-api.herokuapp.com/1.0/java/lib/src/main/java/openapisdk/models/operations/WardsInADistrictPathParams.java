package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class WardsInADistrictPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public WardsInADistrictPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district")
    public String district;
    public WardsInADistrictPathParams withDistrict(String district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public WardsInADistrictPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
}