package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Address {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("curbside")
    public AddressCurbsideEnum curbside;
    public Address withCurbside(AddressCurbsideEnum curbside) {
        this.curbside = curbside;
        return this;
    }
    @JsonProperty("lat")
    public Double lat;
    public Address withLat(Double lat) {
        this.lat = lat;
        return this;
    }
    @JsonProperty("location_id")
    public String locationId;
    public Address withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonProperty("lon")
    public Double lon;
    public Address withLon(Double lon) {
        this.lon = lon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Address withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_hint")
    public String streetHint;
    public Address withStreetHint(String streetHint) {
        this.streetHint = streetHint;
        return this;
    }
}