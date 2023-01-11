package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Airport
 * Array of all available airports or one airport matching the request.
**/
public class Airport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AirportCode")
    public String airportCode;
    public Airport withAirportCode(String airportCode) {
        this.airportCode = airportCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CityCode")
    public String cityCode;
    public Airport withCityCode(String cityCode) {
        this.cityCode = cityCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CountryCode")
    public String countryCode;
    public Airport withCountryCode(String countryCode) {
        this.countryCode = countryCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationType")
    public String locationType;
    public Airport withLocationType(String locationType) {
        this.locationType = locationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Names")
    public AirportNames names;
    public Airport withNames(AirportNames names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Position")
    public AirportPosition position;
    public Airport withPosition(AirportPosition position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimeZoneId")
    public String timeZoneId;
    public Airport withTimeZoneId(String timeZoneId) {
        this.timeZoneId = timeZoneId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UtcOffset")
    public Float utcOffset;
    public Airport withUtcOffset(Float utcOffset) {
        this.utcOffset = utcOffset;
        return this;
    }
}