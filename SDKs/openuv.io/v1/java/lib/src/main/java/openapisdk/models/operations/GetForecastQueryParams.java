package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetForecastQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alt")
    public Double alt;
    public GetForecastQueryParams withAlt(Double alt) {
        this.alt = alt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dt")
    public OffsetDateTime dt;
    public GetForecastQueryParams withDt(OffsetDateTime dt) {
        this.dt = dt;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Double lat;
    public GetForecastQueryParams withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lng")
    public Double lng;
    public GetForecastQueryParams withLng(Double lng) {
        this.lng = lng;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ozone")
    public Double ozone;
    public GetForecastQueryParams withOzone(Double ozone) {
        this.ozone = ozone;
        return this;
    }
}