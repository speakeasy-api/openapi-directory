package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScreenshotPayloadConfigs {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("macos mojave")
    public Browsers macosMojave;
    public ScreenshotPayloadConfigs withMacosMojave(Browsers macosMojave) {
        this.macosMojave = macosMojave;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("windows 10")
    public Browsers windows10;
    public ScreenshotPayloadConfigs withWindows10(Browsers windows10) {
        this.windows10 = windows10;
        return this;
    }
}