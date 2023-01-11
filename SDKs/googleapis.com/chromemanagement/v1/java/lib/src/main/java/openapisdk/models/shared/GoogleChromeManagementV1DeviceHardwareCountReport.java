package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1DeviceHardwareCountReport
 * Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.
**/
public class GoogleChromeManagementV1DeviceHardwareCountReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public String bucket;
    public GoogleChromeManagementV1DeviceHardwareCountReport withBucket(String bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public String count;
    public GoogleChromeManagementV1DeviceHardwareCountReport withCount(String count) {
        this.count = count;
        return this;
    }
}