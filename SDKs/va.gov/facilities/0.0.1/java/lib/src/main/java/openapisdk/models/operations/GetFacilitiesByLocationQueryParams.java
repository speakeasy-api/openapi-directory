package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFacilitiesByLocationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=bbox[]")
    public Float[] bbox;
    public GetFacilitiesByLocationQueryParams withBbox(Float[] bbox) {
        this.bbox = bbox;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ids")
    public String[] ids;
    public GetFacilitiesByLocationQueryParams withIds(String[] ids) {
        this.ids = ids;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Float lat;
    public GetFacilitiesByLocationQueryParams withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=long")
    public Float long_;
    public GetFacilitiesByLocationQueryParams withLong(Float long_) {
        this.long_ = long_;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mobile")
    public Boolean mobile;
    public GetFacilitiesByLocationQueryParams withMobile(Boolean mobile) {
        this.mobile = mobile;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public GetFacilitiesByLocationQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public GetFacilitiesByLocationQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=services[]")
    public String[] services;
    public GetFacilitiesByLocationQueryParams withServices(String[] services) {
        this.services = services;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=state")
    public String state;
    public GetFacilitiesByLocationQueryParams withState(String state) {
        this.state = state;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public GetFacilitiesByLocationTypeEnum type;
    public GetFacilitiesByLocationQueryParams withType(GetFacilitiesByLocationTypeEnum type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=visn")
    public Double visn;
    public GetFacilitiesByLocationQueryParams withVisn(Double visn) {
        this.visn = visn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=zip")
    public String zip;
    public GetFacilitiesByLocationQueryParams withZip(String zip) {
        this.zip = zip;
        return this;
    }
}