package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Seats
 * JSON template for subscription seats.
**/
public class Seats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Seats withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("licensedNumberOfSeats")
    public Integer licensedNumberOfSeats;
    public Seats withLicensedNumberOfSeats(Integer licensedNumberOfSeats) {
        this.licensedNumberOfSeats = licensedNumberOfSeats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumNumberOfSeats")
    public Integer maximumNumberOfSeats;
    public Seats withMaximumNumberOfSeats(Integer maximumNumberOfSeats) {
        this.maximumNumberOfSeats = maximumNumberOfSeats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfSeats")
    public Integer numberOfSeats;
    public Seats withNumberOfSeats(Integer numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
        return this;
    }
}