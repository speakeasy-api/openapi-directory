package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Flight
 * All details related to a single request item for a direct flight emission estimates.
**/
public class Flight {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("departureDate")
    public Date departureDate;
    public Flight withDepartureDate(Date departureDate) {
        this.departureDate = departureDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public String destination;
    public Flight withDestination(String destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flightNumber")
    public Integer flightNumber;
    public Flight withFlightNumber(Integer flightNumber) {
        this.flightNumber = flightNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingCarrierCode")
    public String operatingCarrierCode;
    public Flight withOperatingCarrierCode(String operatingCarrierCode) {
        this.operatingCarrierCode = operatingCarrierCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origin")
    public String origin;
    public Flight withOrigin(String origin) {
        this.origin = origin;
        return this;
    }
}