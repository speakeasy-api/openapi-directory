package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Color {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blue")
    public Long blue;
    public Color withBlue(Long blue) {
        this.blue = blue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("green")
    public Long green;
    public Color withGreen(Long green) {
        this.green = green;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hex")
    public String hex;
    public Color withHex(String hex) {
        this.hex = hex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_of_pixel")
    public Long numberOfPixel;
    public Color withNumberOfPixel(Long numberOfPixel) {
        this.numberOfPixel = numberOfPixel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentage")
    public String percentage;
    public Color withPercentage(String percentage) {
        this.percentage = percentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("red")
    public Long red;
    public Color withRed(Long red) {
        this.red = red;
        return this;
    }
}