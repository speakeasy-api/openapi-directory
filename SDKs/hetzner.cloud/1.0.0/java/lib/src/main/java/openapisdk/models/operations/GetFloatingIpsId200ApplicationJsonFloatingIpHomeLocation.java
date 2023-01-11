package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
public class GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation {
    @JsonProperty("city")
    public String city;
    public GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetFloatingIpsId200ApplicationJsonFloatingIpHomeLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}