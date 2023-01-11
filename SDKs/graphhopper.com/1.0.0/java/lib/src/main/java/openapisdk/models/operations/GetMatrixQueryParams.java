package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatrixQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=curbside")
    public GetMatrixCurbsideEnum[] curbside;
    public GetMatrixQueryParams withCurbside(GetMatrixCurbsideEnum[] curbside) {
        this.curbside = curbside;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fail_fast")
    public Boolean failFast;
    public GetMatrixQueryParams withFailFast(Boolean failFast) {
        this.failFast = failFast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_curbside")
    public GetMatrixFromCurbsideEnum[] fromCurbside;
    public GetMatrixQueryParams withFromCurbside(GetMatrixFromCurbsideEnum[] fromCurbside) {
        this.fromCurbside = fromCurbside;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_point")
    public String[] fromPoint;
    public GetMatrixQueryParams withFromPoint(String[] fromPoint) {
        this.fromPoint = fromPoint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_point_hint")
    public String[] fromPointHint;
    public GetMatrixQueryParams withFromPointHint(String[] fromPointHint) {
        this.fromPointHint = fromPointHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=out_array")
    public String[] outArray;
    public GetMatrixQueryParams withOutArray(String[] outArray) {
        this.outArray = outArray;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point")
    public String[] point;
    public GetMatrixQueryParams withPoint(String[] point) {
        this.point = point;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point_hint")
    public String[] pointHint;
    public GetMatrixQueryParams withPointHint(String[] pointHint) {
        this.pointHint = pointHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=snap_prevention")
    public String[] snapPrevention;
    public GetMatrixQueryParams withSnapPrevention(String[] snapPrevention) {
        this.snapPrevention = snapPrevention;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to_curbside")
    public GetMatrixToCurbsideEnum[] toCurbside;
    public GetMatrixQueryParams withToCurbside(GetMatrixToCurbsideEnum[] toCurbside) {
        this.toCurbside = toCurbside;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to_point")
    public String[] toPoint;
    public GetMatrixQueryParams withToPoint(String[] toPoint) {
        this.toPoint = toPoint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=to_point_hint")
    public String[] toPointHint;
    public GetMatrixQueryParams withToPointHint(String[] toPointHint) {
        this.toPointHint = toPointHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=turn_costs")
    public Boolean turnCosts;
    public GetMatrixQueryParams withTurnCosts(Boolean turnCosts) {
        this.turnCosts = turnCosts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle")
    public openapisdk.models.shared.VehicleProfileIdEnum vehicle;
    public GetMatrixQueryParams withVehicle(openapisdk.models.shared.VehicleProfileIdEnum vehicle) {
        this.vehicle = vehicle;
        return this;
    }
}