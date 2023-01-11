package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Color {
    @JsonProperty("alpha")
    public Double alpha;
    public Color withAlpha(Double alpha) {
        this.alpha = alpha;
        return this;
    }
    @JsonProperty("blue")
    public Double blue;
    public Color withBlue(Double blue) {
        this.blue = blue;
        return this;
    }
    @JsonProperty("green")
    public Double green;
    public Color withGreen(Double green) {
        this.green = green;
        return this;
    }
    @JsonProperty("red")
    public Double red;
    public Color withRed(Double red) {
        this.red = red;
        return this;
    }
}