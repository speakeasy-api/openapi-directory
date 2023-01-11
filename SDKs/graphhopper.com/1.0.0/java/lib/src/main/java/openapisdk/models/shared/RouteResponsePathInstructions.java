package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RouteResponsePathInstructions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("distance")
    public Double distance;
    public RouteResponsePathInstructions withDistance(Double distance) {
        this.distance = distance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exit_number")
    public Integer exitNumber;
    public RouteResponsePathInstructions withExitNumber(Integer exitNumber) {
        this.exitNumber = exitNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interval")
    public Integer[] interval;
    public RouteResponsePathInstructions withInterval(Integer[] interval) {
        this.interval = interval;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign")
    public Integer sign;
    public RouteResponsePathInstructions withSign(Integer sign) {
        this.sign = sign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_name")
    public String streetName;
    public RouteResponsePathInstructions withStreetName(String streetName) {
        this.streetName = streetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public RouteResponsePathInstructions withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public Integer time;
    public RouteResponsePathInstructions withTime(Integer time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("turn_angle")
    public Double turnAngle;
    public RouteResponsePathInstructions withTurnAngle(Double turnAngle) {
        this.turnAngle = turnAngle;
        return this;
    }
}