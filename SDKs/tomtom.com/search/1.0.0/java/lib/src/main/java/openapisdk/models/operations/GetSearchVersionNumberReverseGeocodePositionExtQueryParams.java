package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSearchVersionNumberReverseGeocodePositionExtQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=callback")
    public String callback;
    public GetSearchVersionNumberReverseGeocodePositionExtQueryParams withCallback(String callback) {
        this.callback = callback;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=heading")
    public Float heading;
    public GetSearchVersionNumberReverseGeocodePositionExtQueryParams withHeading(Float heading) {
        this.heading = heading;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=number")
    public String number;
    public GetSearchVersionNumberReverseGeocodePositionExtQueryParams withNumber(String number) {
        this.number = number;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=radius")
    public Long radius;
    public GetSearchVersionNumberReverseGeocodePositionExtQueryParams withRadius(Long radius) {
        this.radius = radius;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=returnRoadUse")
    public Boolean returnRoadUse;
    public GetSearchVersionNumberReverseGeocodePositionExtQueryParams withReturnRoadUse(Boolean returnRoadUse) {
        this.returnRoadUse = returnRoadUse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=returnSpeedLimit")
    public Boolean returnSpeedLimit;
    public GetSearchVersionNumberReverseGeocodePositionExtQueryParams withReturnSpeedLimit(Boolean returnSpeedLimit) {
        this.returnSpeedLimit = returnSpeedLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=roadUse")
    public String roadUse;
    public GetSearchVersionNumberReverseGeocodePositionExtQueryParams withRoadUse(String roadUse) {
        this.roadUse = roadUse;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=spatialKeys")
    public Boolean spatialKeys;
    public GetSearchVersionNumberReverseGeocodePositionExtQueryParams withSpatialKeys(Boolean spatialKeys) {
        this.spatialKeys = spatialKeys;
        return this;
    }
}