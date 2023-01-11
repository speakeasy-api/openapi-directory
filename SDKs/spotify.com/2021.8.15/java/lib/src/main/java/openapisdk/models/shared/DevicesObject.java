package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DevicesObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-devicesobject - Find more info on the official Spotify Web API Reference
**/
public class DevicesObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public DeviceObject[] devices;
    public DevicesObject withDevices(DeviceObject[] devices) {
        this.devices = devices;
        return this;
    }
}