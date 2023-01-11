package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostFloatingIps201ApplicationJsonFloatingIpHomeLocation
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
public class PostFloatingIps201ApplicationJsonFloatingIpHomeLocation {
    @JsonProperty("city")
    public String city;
    public PostFloatingIps201ApplicationJsonFloatingIpHomeLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PostFloatingIps201ApplicationJsonFloatingIpHomeLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PostFloatingIps201ApplicationJsonFloatingIpHomeLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public PostFloatingIps201ApplicationJsonFloatingIpHomeLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public PostFloatingIps201ApplicationJsonFloatingIpHomeLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public PostFloatingIps201ApplicationJsonFloatingIpHomeLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostFloatingIps201ApplicationJsonFloatingIpHomeLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PostFloatingIps201ApplicationJsonFloatingIpHomeLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}