package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosDeviceList
 * A list of iOS device configurations in which the test is to be executed.
**/
public class IosDeviceList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosDevices")
    public IosDevice[] iosDevices;
    public IosDeviceList withIosDevices(IosDevice[] iosDevices) {
        this.iosDevices = iosDevices;
        return this;
    }
}