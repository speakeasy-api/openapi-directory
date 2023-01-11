package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetVolumesId200ApplicationJsonVolumeLocation
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
public class GetVolumesId200ApplicationJsonVolumeLocation {
    @JsonProperty("city")
    public String city;
    public GetVolumesId200ApplicationJsonVolumeLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public GetVolumesId200ApplicationJsonVolumeLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public GetVolumesId200ApplicationJsonVolumeLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public GetVolumesId200ApplicationJsonVolumeLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public GetVolumesId200ApplicationJsonVolumeLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public GetVolumesId200ApplicationJsonVolumeLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public GetVolumesId200ApplicationJsonVolumeLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public GetVolumesId200ApplicationJsonVolumeLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}