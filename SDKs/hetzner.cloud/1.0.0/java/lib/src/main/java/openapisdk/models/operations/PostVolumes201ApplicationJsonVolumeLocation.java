package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostVolumes201ApplicationJsonVolumeLocation
 * Location of the Volume. Volume can only be attached to Servers in the same Location.
**/
public class PostVolumes201ApplicationJsonVolumeLocation {
    @JsonProperty("city")
    public String city;
    public PostVolumes201ApplicationJsonVolumeLocation withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonProperty("country")
    public String country;
    public PostVolumes201ApplicationJsonVolumeLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public PostVolumes201ApplicationJsonVolumeLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("id")
    public Double id;
    public PostVolumes201ApplicationJsonVolumeLocation withId(Double id) {
        this.id = id;
        return this;
    }
    @JsonProperty("latitude")
    public Double latitude;
    public PostVolumes201ApplicationJsonVolumeLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonProperty("longitude")
    public Double longitude;
    public PostVolumes201ApplicationJsonVolumeLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostVolumes201ApplicationJsonVolumeLocation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("network_zone")
    public String networkZone;
    public PostVolumes201ApplicationJsonVolumeLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
}