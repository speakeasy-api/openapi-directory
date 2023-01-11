package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation
 * Location the Floating IP was created in. Routing is optimized for this Location.
**/
public class GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation {
    @JsonProperty("city")
    public String city;
    public GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetFloatingIps200ApplicationJsonFloatingIpsHomeLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}