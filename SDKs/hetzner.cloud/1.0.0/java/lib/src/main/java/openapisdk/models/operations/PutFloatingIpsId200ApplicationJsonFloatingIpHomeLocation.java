package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
public class PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation {
    @JsonProperty("city")
    public String city;
    public PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PutFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}