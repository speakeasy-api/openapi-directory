package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GooglePrivacyDlpV2Color
 * Represents a color in the RGB color space.
**/
public class GooglePrivacyDlpV2Color {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blue")
    public Float blue;
    public GooglePrivacyDlpV2Color withBlue(Float blue) {
        this.blue = blue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("green")
    public Float green;
    public GooglePrivacyDlpV2Color withGreen(Float green) {
        this.green = green;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("red")
    public Float red;
    public GooglePrivacyDlpV2Color withRed(Float red) {
        this.red = red;
        return this;
    }
}