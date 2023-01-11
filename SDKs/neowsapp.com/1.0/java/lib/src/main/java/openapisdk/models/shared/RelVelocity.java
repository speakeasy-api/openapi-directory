package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RelVelocity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kilometers_per_hour")
    public String kilometersPerHour;
    public RelVelocity withKilometersPerHour(String kilometersPerHour) {
        this.kilometersPerHour = kilometersPerHour;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("miles_per_hour")
    public String milesPerHour;
    public RelVelocity withMilesPerHour(String milesPerHour) {
        this.milesPerHour = milesPerHour;
        return this;
    }
}