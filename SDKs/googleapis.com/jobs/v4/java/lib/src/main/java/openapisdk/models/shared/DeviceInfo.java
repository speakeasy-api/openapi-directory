package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceInfo
 * Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices.
**/
public class DeviceInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceType")
    public DeviceInfoDeviceTypeEnum deviceType;
    public DeviceInfo withDeviceType(DeviceInfoDeviceTypeEnum deviceType) {
        this.deviceType = deviceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public DeviceInfo withId(String id) {
        this.id = id;
        return this;
    }
}