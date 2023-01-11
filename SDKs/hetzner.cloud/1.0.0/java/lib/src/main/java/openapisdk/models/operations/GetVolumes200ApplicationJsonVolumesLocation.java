package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetVolumes200ApplicationJsonVolumesLocation
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
public class GetVolumes200ApplicationJsonVolumesLocation {
    @JsonProperty("city")
    public String city;
    public GetVolumes200ApplicationJsonVolumesLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetVolumes200ApplicationJsonVolumesLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetVolumes200ApplicationJsonVolumesLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetVolumes200ApplicationJsonVolumesLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetVolumes200ApplicationJsonVolumesLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetVolumes200ApplicationJsonVolumesLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetVolumes200ApplicationJsonVolumesLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetVolumes200ApplicationJsonVolumesLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}