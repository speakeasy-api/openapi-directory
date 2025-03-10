/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetVolumesId200ApplicationJSONVolumeLocation - Location of the Volume. Volume can only be attached to Servers in the same Location.
 */
public class GetVolumesId200ApplicationJSONVolumeLocation {
    /**
     * City the Location is closest to
     */
    @JsonProperty("city")
    public String city;

    public GetVolumesId200ApplicationJSONVolumeLocation withCity(String city) {
        this.city = city;
        return this;
    }
    
    /**
     * ISO 3166-1 alpha-2 code of the country the Location resides in
     */
    @JsonProperty("country")
    public String country;

    public GetVolumesId200ApplicationJSONVolumeLocation withCountry(String country) {
        this.country = country;
        return this;
    }
    
    /**
     * Description of the Location
     */
    @JsonProperty("description")
    public String description;

    public GetVolumesId200ApplicationJSONVolumeLocation withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * ID of the Location
     */
    @JsonProperty("id")
    public Double id;

    public GetVolumesId200ApplicationJSONVolumeLocation withId(Double id) {
        this.id = id;
        return this;
    }
    
    /**
     * Latitude of the city closest to the Location
     */
    @JsonProperty("latitude")
    public Double latitude;

    public GetVolumesId200ApplicationJSONVolumeLocation withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    
    /**
     * Longitude of the city closest to the Location
     */
    @JsonProperty("longitude")
    public Double longitude;

    public GetVolumesId200ApplicationJSONVolumeLocation withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    
    /**
     * Unique identifier of the Location
     */
    @JsonProperty("name")
    public String name;

    public GetVolumesId200ApplicationJSONVolumeLocation withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Name of network zone this Location resides in
     */
    @JsonProperty("network_zone")
    public String networkZone;

    public GetVolumesId200ApplicationJSONVolumeLocation withNetworkZone(String networkZone) {
        this.networkZone = networkZone;
        return this;
    }
    
    public GetVolumesId200ApplicationJSONVolumeLocation(@JsonProperty("city") String city, @JsonProperty("country") String country, @JsonProperty("description") String description, @JsonProperty("id") Double id, @JsonProperty("latitude") Double latitude, @JsonProperty("longitude") Double longitude, @JsonProperty("name") String name, @JsonProperty("network_zone") String networkZone) {
        this.city = city;
        this.country = country;
        this.description = description;
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
        this.name = name;
        this.networkZone = networkZone;
  }
}
