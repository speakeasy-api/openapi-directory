package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberCSCategoryExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=btmRight")
    public String btmRight;
    public GetSearchVersionNumberCSCategoryExtQueryParams withBtmRight(String btmRight) {
        this.btmRight = btmRight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countrySet")
    public String countrySet;
    public GetSearchVersionNumberCSCategoryExtQueryParams withCountrySet(String countrySet) {
        this.countrySet = countrySet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=idxSet")
    public String idxSet;
    public GetSearchVersionNumberCSCategoryExtQueryParams withIdxSet(String idxSet) {
        this.idxSet = idxSet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetSearchVersionNumberCSCategoryExtQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Float lat;
    public GetSearchVersionNumberCSCategoryExtQueryParams withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSearchVersionNumberCSCategoryExtQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lon")
    public Float lon;
    public GetSearchVersionNumberCSCategoryExtQueryParams withLon(Float lon) {
        this.lon = lon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ofs")
    public Long ofs;
    public GetSearchVersionNumberCSCategoryExtQueryParams withOfs(Long ofs) {
        this.ofs = ofs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;
    public GetSearchVersionNumberCSCategoryExtQueryParams withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topLeft")
    public String topLeft;
    public GetSearchVersionNumberCSCategoryExtQueryParams withTopLeft(String topLeft) {
        this.topLeft = topLeft;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=typeahead")
    public Boolean typeahead;
    public GetSearchVersionNumberCSCategoryExtQueryParams withTypeahead(Boolean typeahead) {
        this.typeahead = typeahead;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public openapisdk.models.shared.ViewEnum view;
    public GetSearchVersionNumberCSCategoryExtQueryParams withView(openapisdk.models.shared.ViewEnum view) {
        this.view = view;
        return this;
    }
}