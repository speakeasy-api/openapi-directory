package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentMatrix
 * The matrix of environments in which the test is to be executed.
**/
public class EnvironmentMatrix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidDeviceList")
    public AndroidDeviceList androidDeviceList;
    public EnvironmentMatrix withAndroidDeviceList(AndroidDeviceList androidDeviceList) {
        this.androidDeviceList = androidDeviceList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidMatrix")
    public AndroidMatrix androidMatrix;
    public EnvironmentMatrix withAndroidMatrix(AndroidMatrix androidMatrix) {
        this.androidMatrix = androidMatrix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosDeviceList")
    public IosDeviceList iosDeviceList;
    public EnvironmentMatrix withIosDeviceList(IosDeviceList iosDeviceList) {
        this.iosDeviceList = iosDeviceList;
        return this;
    }
}