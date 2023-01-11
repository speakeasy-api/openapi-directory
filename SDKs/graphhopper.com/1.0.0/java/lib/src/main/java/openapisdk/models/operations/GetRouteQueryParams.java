package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRouteQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=algorithm")
    public GetRouteAlgorithmEnum algorithm;
    public GetRouteQueryParams withAlgorithm(GetRouteAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alternative_route.max_paths")
    public Integer alternativeRouteMaxPaths;
    public GetRouteQueryParams withAlternativeRouteMaxPaths(Integer alternativeRouteMaxPaths) {
        this.alternativeRouteMaxPaths = alternativeRouteMaxPaths;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alternative_route.max_share_factor")
    public Double alternativeRouteMaxShareFactor;
    public GetRouteQueryParams withAlternativeRouteMaxShareFactor(Double alternativeRouteMaxShareFactor) {
        this.alternativeRouteMaxShareFactor = alternativeRouteMaxShareFactor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=alternative_route.max_weight_factor")
    public Double alternativeRouteMaxWeightFactor;
    public GetRouteQueryParams withAlternativeRouteMaxWeightFactor(Double alternativeRouteMaxWeightFactor) {
        this.alternativeRouteMaxWeightFactor = alternativeRouteMaxWeightFactor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=avoid")
    public String avoid;
    public GetRouteQueryParams withAvoid(String avoid) {
        this.avoid = avoid;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=block_area")
    public String blockArea;
    public GetRouteQueryParams withBlockArea(String blockArea) {
        this.blockArea = blockArea;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=calc_points")
    public Boolean calcPoints;
    public GetRouteQueryParams withCalcPoints(Boolean calcPoints) {
        this.calcPoints = calcPoints;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ch.disable")
    public Boolean chDisable;
    public GetRouteQueryParams withChDisable(Boolean chDisable) {
        this.chDisable = chDisable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=curbside")
    public GetRouteCurbsideEnum[] curbside;
    public GetRouteQueryParams withCurbside(GetRouteCurbsideEnum[] curbside) {
        this.curbside = curbside;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=debug")
    public Boolean debug;
    public GetRouteQueryParams withDebug(Boolean debug) {
        this.debug = debug;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=details")
    public String[] details;
    public GetRouteQueryParams withDetails(String[] details) {
        this.details = details;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=elevation")
    public Boolean elevation;
    public GetRouteQueryParams withElevation(Boolean elevation) {
        this.elevation = elevation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=heading")
    public Integer[] heading;
    public GetRouteQueryParams withHeading(Integer[] heading) {
        this.heading = heading;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=heading_penalty")
    public Integer headingPenalty;
    public GetRouteQueryParams withHeadingPenalty(Integer headingPenalty) {
        this.headingPenalty = headingPenalty;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=instructions")
    public Boolean instructions;
    public GetRouteQueryParams withInstructions(Boolean instructions) {
        this.instructions = instructions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=locale")
    public String locale;
    public GetRouteQueryParams withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=optimize")
    public String optimize;
    public GetRouteQueryParams withOptimize(String optimize) {
        this.optimize = optimize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=pass_through")
    public Boolean passThrough;
    public GetRouteQueryParams withPassThrough(Boolean passThrough) {
        this.passThrough = passThrough;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point")
    public String[] point;
    public GetRouteQueryParams withPoint(String[] point) {
        this.point = point;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=point_hint")
    public String[] pointHint;
    public GetRouteQueryParams withPointHint(String[] pointHint) {
        this.pointHint = pointHint;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=points_encoded")
    public Boolean pointsEncoded;
    public GetRouteQueryParams withPointsEncoded(Boolean pointsEncoded) {
        this.pointsEncoded = pointsEncoded;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=round_trip.distance")
    public Integer roundTripDistance;
    public GetRouteQueryParams withRoundTripDistance(Integer roundTripDistance) {
        this.roundTripDistance = roundTripDistance;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=round_trip.seed")
    public Long roundTripSeed;
    public GetRouteQueryParams withRoundTripSeed(Long roundTripSeed) {
        this.roundTripSeed = roundTripSeed;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=snap_prevention")
    public String[] snapPrevention;
    public GetRouteQueryParams withSnapPrevention(String[] snapPrevention) {
        this.snapPrevention = snapPrevention;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=turn_costs")
    public Boolean turnCosts;
    public GetRouteQueryParams withTurnCosts(Boolean turnCosts) {
        this.turnCosts = turnCosts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=vehicle")
    public openapisdk.models.shared.VehicleProfileIdEnum vehicle;
    public GetRouteQueryParams withVehicle(openapisdk.models.shared.VehicleProfileIdEnum vehicle) {
        this.vehicle = vehicle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=weighting")
    public String weighting;
    public GetRouteQueryParams withWeighting(String weighting) {
        this.weighting = weighting;
        return this;
    }
}