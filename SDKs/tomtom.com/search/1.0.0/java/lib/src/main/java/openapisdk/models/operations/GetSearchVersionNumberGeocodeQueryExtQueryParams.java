package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberGeocodeQueryExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=btmRight")
    public String btmRight;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withBtmRight(String btmRight) {
        this.btmRight = btmRight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countrySet")
    public String countrySet;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withCountrySet(String countrySet) {
        this.countrySet = countrySet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extendedPostalCodesFor")
    public String extendedPostalCodesFor;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withExtendedPostalCodesFor(String extendedPostalCodesFor) {
        this.extendedPostalCodesFor = extendedPostalCodesFor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Float lat;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lon")
    public Float lon;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withLon(Float lon) {
        this.lon = lon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ofs")
    public Long ofs;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withOfs(Long ofs) {
        this.ofs = ofs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=storeResult")
    public Boolean storeResult;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withStoreResult(Boolean storeResult) {
        this.storeResult = storeResult;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topLeft")
    public String topLeft;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withTopLeft(String topLeft) {
        this.topLeft = topLeft;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=typeahead")
    public Boolean typeahead;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withTypeahead(Boolean typeahead) {
        this.typeahead = typeahead;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public openapisdk.models.shared.ViewEnum view;
    public GetSearchVersionNumberGeocodeQueryExtQueryParams withView(openapisdk.models.shared.ViewEnum view) {
        this.view = view;
        return this;
    }
}