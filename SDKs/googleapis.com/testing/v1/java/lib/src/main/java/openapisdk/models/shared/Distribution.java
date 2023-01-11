package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Distribution
 * Data about the relative number of devices running a given configuration of the Android platform.
**/
public class Distribution {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("marketShare")
    public Double marketShare;
    public Distribution withMarketShare(Double marketShare) {
        this.marketShare = marketShare;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementTime")
    public String measurementTime;
    public Distribution withMeasurementTime(String measurementTime) {
        this.measurementTime = measurementTime;
        return this;
    }
}