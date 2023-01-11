package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Server {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, Object> attributes;
    public Server withAttributes(java.util.Map<String, Object> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bingKey")
    public String bingKey;
    public Server withBingKey(String bingKey) {
        this.bingKey = bingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coordinateFormat")
    public String coordinateFormat;
    public Server withCoordinateFormat(String coordinateFormat) {
        this.coordinateFormat = coordinateFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceReadonly")
    public Boolean deviceReadonly;
    public Server withDeviceReadonly(Boolean deviceReadonly) {
        this.deviceReadonly = deviceReadonly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceSettings")
    public Boolean forceSettings;
    public Server withForceSettings(Boolean forceSettings) {
        this.forceSettings = forceSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Server withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latitude")
    public Double latitude;
    public Server withLatitude(Double latitude) {
        this.latitude = latitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limitCommands")
    public Boolean limitCommands;
    public Server withLimitCommands(Boolean limitCommands) {
        this.limitCommands = limitCommands;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longitude")
    public Double longitude;
    public Server withLongitude(Double longitude) {
        this.longitude = longitude;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("map")
    public String map;
    public Server withMap(String map) {
        this.map = map;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapUrl")
    public String mapUrl;
    public Server withMapUrl(String mapUrl) {
        this.mapUrl = mapUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("poiLayer")
    public String poiLayer;
    public Server withPoiLayer(String poiLayer) {
        this.poiLayer = poiLayer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("readonly")
    public Boolean readonly;
    public Server withReadonly(Boolean readonly) {
        this.readonly = readonly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration")
    public Boolean registration;
    public Server withRegistration(Boolean registration) {
        this.registration = registration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twelveHourFormat")
    public Boolean twelveHourFormat;
    public Server withTwelveHourFormat(Boolean twelveHourFormat) {
        this.twelveHourFormat = twelveHourFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Server withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zoom")
    public Long zoom;
    public Server withZoom(Long zoom) {
        this.zoom = zoom;
        return this;
    }
}