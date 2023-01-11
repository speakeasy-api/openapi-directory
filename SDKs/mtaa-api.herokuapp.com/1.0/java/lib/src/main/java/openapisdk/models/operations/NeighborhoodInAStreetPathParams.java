package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NeighborhoodInAStreetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=country")
    public String country;
    public NeighborhoodInAStreetPathParams withCountry(String country) {
        this.country = country;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=district")
    public String district;
    public NeighborhoodInAStreetPathParams withDistrict(String district) {
        this.district = district;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=region")
    public String region;
    public NeighborhoodInAStreetPathParams withRegion(String region) {
        this.region = region;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=street")
    public String street;
    public NeighborhoodInAStreetPathParams withStreet(String street) {
        this.street = street;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ward")
    public String ward;
    public NeighborhoodInAStreetPathParams withWard(String ward) {
        this.ward = ward;
        return this;
    }
}