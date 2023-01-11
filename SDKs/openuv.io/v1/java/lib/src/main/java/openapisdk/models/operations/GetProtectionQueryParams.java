package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProtectionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public Double alt;
    public GetProtectionQueryParams withAlt(Double alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from")
    public Double from;
    public GetProtectionQueryParams withFrom(Double from) {
        this.from = from;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Double lat;
    public GetProtectionQueryParams withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lng")
    public Double lng;
    public GetProtectionQueryParams withLng(Double lng) {
        this.lng = lng;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ozone")
    public Double ozone;
    public GetProtectionQueryParams withOzone(Double ozone) {
        this.ozone = ozone;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to")
    public Double to;
    public GetProtectionQueryParams withTo(Double to) {
        this.to = to;
        return this;
    }
}