package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StreetsInAWardPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public StreetsInAWardPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district")
    public String district;
    public StreetsInAWardPathParams withDistrict(String district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public StreetsInAWardPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ward")
    public String ward;
    public StreetsInAWardPathParams withWard(String ward) {
        this.ward = ward;
        return this;
    }
}