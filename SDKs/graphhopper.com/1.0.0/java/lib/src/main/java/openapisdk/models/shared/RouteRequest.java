package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RouteRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public RouteRequestAlgorithmEnum algorithm;
    public RouteRequest withAlgorithm(RouteRequestAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_route.max_paths")
    public Integer alternativeRouteMaxPaths;
    public RouteRequest withAlternativeRouteMaxPaths(Integer alternativeRouteMaxPaths) {
        this.alternativeRouteMaxPaths = alternativeRouteMaxPaths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_route.max_share_factor")
    public Double alternativeRouteMaxShareFactor;
    public RouteRequest withAlternativeRouteMaxShareFactor(Double alternativeRouteMaxShareFactor) {
        this.alternativeRouteMaxShareFactor = alternativeRouteMaxShareFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alternative_route.max_weight_factor")
    public Double alternativeRouteMaxWeightFactor;
    public RouteRequest withAlternativeRouteMaxWeightFactor(Double alternativeRouteMaxWeightFactor) {
        this.alternativeRouteMaxWeightFactor = alternativeRouteMaxWeightFactor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoid")
    public String avoid;
    public RouteRequest withAvoid(String avoid) {
        this.avoid = avoid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_area")
    public String blockArea;
    public RouteRequest withBlockArea(String blockArea) {
        this.blockArea = blockArea;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("calc_points")
    public Boolean calcPoints;
    public RouteRequest withCalcPoints(Boolean calcPoints) {
        this.calcPoints = calcPoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ch.disable")
    public Boolean chDisable;
    public RouteRequest withChDisable(Boolean chDisable) {
        this.chDisable = chDisable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("curbsides")
    public RouteRequestCurbsidesEnum[] curbsides;
    public RouteRequest withCurbsides(RouteRequestCurbsidesEnum[] curbsides) {
        this.curbsides = curbsides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debug")
    public Boolean debug;
    public RouteRequest withDebug(Boolean debug) {
        this.debug = debug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String[] details;
    public RouteRequest withDetails(String[] details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elevation")
    public Boolean elevation;
    public RouteRequest withElevation(Boolean elevation) {
        this.elevation = elevation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("heading_penalty")
    public Integer headingPenalty;
    public RouteRequest withHeadingPenalty(Integer headingPenalty) {
        this.headingPenalty = headingPenalty;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("headings")
    public Integer[] headings;
    public RouteRequest withHeadings(Integer[] headings) {
        this.headings = headings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructions")
    public Boolean instructions;
    public RouteRequest withInstructions(Boolean instructions) {
        this.instructions = instructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public RouteRequest withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("optimize")
    public String optimize;
    public RouteRequest withOptimize(String optimize) {
        this.optimize = optimize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pass_through")
    public Boolean passThrough;
    public RouteRequest withPassThrough(Boolean passThrough) {
        this.passThrough = passThrough;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("point_hints")
    public String[] pointHints;
    public RouteRequest withPointHints(String[] pointHints) {
        this.pointHints = pointHints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points")
    public Double[][] points;
    public RouteRequest withPoints(Double[][] points) {
        this.points = points;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("points_encoded")
    public Boolean pointsEncoded;
    public RouteRequest withPointsEncoded(Boolean pointsEncoded) {
        this.pointsEncoded = pointsEncoded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("round_trip.distance")
    public Integer roundTripDistance;
    public RouteRequest withRoundTripDistance(Integer roundTripDistance) {
        this.roundTripDistance = roundTripDistance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("round_trip.seed")
    public Long roundTripSeed;
    public RouteRequest withRoundTripSeed(Long roundTripSeed) {
        this.roundTripSeed = roundTripSeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("snap_preventions")
    public String[] snapPreventions;
    public RouteRequest withSnapPreventions(String[] snapPreventions) {
        this.snapPreventions = snapPreventions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vehicle")
    public java.util.Map<String, Object> vehicle;
    public RouteRequest withVehicle(java.util.Map<String, Object> vehicle) {
        this.vehicle = vehicle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weighting")
    public String weighting;
    public RouteRequest withWeighting(String weighting) {
        this.weighting = weighting;
        return this;
    }
}