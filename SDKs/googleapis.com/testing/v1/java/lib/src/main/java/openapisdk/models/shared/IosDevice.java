package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosDevice
 * A single iOS device.
**/
public class IosDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosModelId")
    public String iosModelId;
    public IosDevice withIosModelId(String iosModelId) {
        this.iosModelId = iosModelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosVersionId")
    public String iosVersionId;
    public IosDevice withIosVersionId(String iosVersionId) {
        this.iosVersionId = iosVersionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public String locale;
    public IosDevice withLocale(String locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orientation")
    public String orientation;
    public IosDevice withOrientation(String orientation) {
        this.orientation = orientation;
        return this;
    }
}