package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceObject

 * https://developer.spotify.com/documentation/web-api/reference/#object-deviceobject - Find more info on the official Spotify Web API Reference
**/
public class DeviceObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeviceObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_active")
    public Boolean isActive;
    public DeviceObject withIsActive(Boolean isActive) {
        this.isActive = isActive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_private_session")
    public Boolean isPrivateSession;
    public DeviceObject withIsPrivateSession(Boolean isPrivateSession) {
        this.isPrivateSession = isPrivateSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_restricted")
    public Boolean isRestricted;
    public DeviceObject withIsRestricted(Boolean isRestricted) {
        this.isRestricted = isRestricted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DeviceObject withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public DeviceObject withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume_percent")
    public Integer volumePercent;
    public DeviceObject withVolumePercent(Integer volumePercent) {
        this.volumePercent = volumePercent;
        return this;
    }
}