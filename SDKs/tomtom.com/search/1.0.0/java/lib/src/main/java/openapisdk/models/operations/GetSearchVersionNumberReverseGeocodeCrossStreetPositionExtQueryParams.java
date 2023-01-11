package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=heading")
    public Float heading;
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams withHeading(Float heading) {
        this.heading = heading;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public String language;
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams withLanguage(String language) {
        this.language = language;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public Long limit;
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spatialKeys")
    public Boolean spatialKeys;
    public GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams withSpatialKeys(Boolean spatialKeys) {
        this.spatialKeys = spatialKeys;
        return this;
    }
}