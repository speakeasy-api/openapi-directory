package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidDeviceList
 * A list of Android device configurations in which the test is to be executed.
**/
public class AndroidDeviceList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidDevices")
    public AndroidDevice[] androidDevices;
    public AndroidDeviceList withAndroidDevices(AndroidDevice[] androidDevices) {
        this.androidDevices = androidDevices;
        return this;
    }
}