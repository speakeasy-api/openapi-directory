package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeocodeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=debug")
    public Boolean debug;
    public GetGeocodeQueryParams withDebug(Boolean debug) {
        this.debug = debug;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Integer limit;
    public GetGeocodeQueryParams withLimit(Integer limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetGeocodeQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point")
    public String point;
    public GetGeocodeQueryParams withPoint(String point) {
        this.point = point;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=provider")
    public String provider;
    public GetGeocodeQueryParams withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetGeocodeQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reverse")
    public Boolean reverse;
    public GetGeocodeQueryParams withReverse(Boolean reverse) {
        this.reverse = reverse;
        return this;
    }
}