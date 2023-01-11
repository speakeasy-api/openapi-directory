package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberNearbySearchExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=btmRight")
    public String btmRight;
    public GetSearchVersionNumberNearbySearchExtQueryParams withBtmRight(String btmRight) {
        this.btmRight = btmRight;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=countrySet")
    public String countrySet;
    public GetSearchVersionNumberNearbySearchExtQueryParams withCountrySet(String countrySet) {
        this.countrySet = countrySet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=extendedPostalCodesFor")
    public String extendedPostalCodesFor;
    public GetSearchVersionNumberNearbySearchExtQueryParams withExtendedPostalCodesFor(String extendedPostalCodesFor) {
        this.extendedPostalCodesFor = extendedPostalCodesFor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=idxSet")
    public String idxSet;
    public GetSearchVersionNumberNearbySearchExtQueryParams withIdxSet(String idxSet) {
        this.idxSet = idxSet;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetSearchVersionNumberNearbySearchExtQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lat")
    public Float lat;
    public GetSearchVersionNumberNearbySearchExtQueryParams withLat(Float lat) {
        this.lat = lat;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSearchVersionNumberNearbySearchExtQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=lon")
    public Float lon;
    public GetSearchVersionNumberNearbySearchExtQueryParams withLon(Float lon) {
        this.lon = lon;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxFuzzyLevel")
    public Long maxFuzzyLevel;
    public GetSearchVersionNumberNearbySearchExtQueryParams withMaxFuzzyLevel(Long maxFuzzyLevel) {
        this.maxFuzzyLevel = maxFuzzyLevel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minFuzzyLevel")
    public Long minFuzzyLevel;
    public GetSearchVersionNumberNearbySearchExtQueryParams withMinFuzzyLevel(Long minFuzzyLevel) {
        this.minFuzzyLevel = minFuzzyLevel;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ofs")
    public Long ofs;
    public GetSearchVersionNumberNearbySearchExtQueryParams withOfs(Long ofs) {
        this.ofs = ofs;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;
    public GetSearchVersionNumberNearbySearchExtQueryParams withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topLeft")
    public String topLeft;
    public GetSearchVersionNumberNearbySearchExtQueryParams withTopLeft(String topLeft) {
        this.topLeft = topLeft;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=view")
    public openapisdk.models.shared.ViewEnum view;
    public GetSearchVersionNumberNearbySearchExtQueryParams withView(openapisdk.models.shared.ViewEnum view) {
        this.view = view;
        return this;
    }
}