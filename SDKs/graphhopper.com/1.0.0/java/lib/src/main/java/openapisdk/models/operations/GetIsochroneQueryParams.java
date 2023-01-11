package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIsochroneQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=buckets")
    public Integer buckets;
    public GetIsochroneQueryParams withBuckets(Integer buckets) {
        this.buckets = buckets;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=distance_limit")
    public Integer distanceLimit;
    public GetIsochroneQueryParams withDistanceLimit(Integer distanceLimit) {
        this.distanceLimit = distanceLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point")
    public String point;
    public GetIsochroneQueryParams withPoint(String point) {
        this.point = point;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=reverse_flow")
    public Boolean reverseFlow;
    public GetIsochroneQueryParams withReverseFlow(Boolean reverseFlow) {
        this.reverseFlow = reverseFlow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=time_limit")
    public Integer timeLimit;
    public GetIsochroneQueryParams withTimeLimit(Integer timeLimit) {
        this.timeLimit = timeLimit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle")
    public openapisdk.models.shared.VehicleProfileIdEnum vehicle;
    public GetIsochroneQueryParams withVehicle(openapisdk.models.shared.VehicleProfileIdEnum vehicle) {
        this.vehicle = vehicle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=weighting")
    public GetIsochroneWeightingEnum weighting;
    public GetIsochroneQueryParams withWeighting(GetIsochroneWeightingEnum weighting) {
        this.weighting = weighting;
        return this;
    }
}