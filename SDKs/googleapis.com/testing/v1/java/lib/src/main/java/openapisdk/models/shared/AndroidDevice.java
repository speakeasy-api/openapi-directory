package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AndroidDevice
 * A single Android device.
**/
public class AndroidDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidModelId")
    public String androidModelId;
    public AndroidDevice withAndroidModelId(String androidModelId) {
        this.androidModelId = androidModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidVersionId")
    public String androidVersionId;
    public AndroidDevice withAndroidVersionId(String androidVersionId) {
        this.androidVersionId = androidVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public AndroidDevice withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public String orientation;
    public AndroidDevice withOrientation(String orientation) {
        this.orientation = orientation;
        return this;
    }
}