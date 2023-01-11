package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Environment
 * The environment in which the test is run.
**/
public class Environment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidDevice")
    public AndroidDevice androidDevice;
    public Environment withAndroidDevice(AndroidDevice androidDevice) {
        this.androidDevice = androidDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosDevice")
    public IosDevice iosDevice;
    public Environment withIosDevice(IosDevice iosDevice) {
        this.iosDevice = iosDevice;
        return this;
    }
}