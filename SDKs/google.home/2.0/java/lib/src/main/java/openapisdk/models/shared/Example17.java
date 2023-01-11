package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Example17 {
    @JsonProperty("do_not_disturb")
    public Boolean doNotDisturb;
    public Example17 withDoNotDisturb(Boolean doNotDisturb) {
        this.doNotDisturb = doNotDisturb;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public Example17 withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("led_brightness")
    public Double ledBrightness;
    public Example17 withLedBrightness(Double ledBrightness) {
        this.ledBrightness = ledBrightness;
        return this;
    }
    @JsonProperty("volume")
    public Double volume;
    public Example17 withVolume(Double volume) {
        this.volume = volume;
        return this;
    }
    @JsonProperty("windows")
    public Window2[] windows;
    public Example17 withWindows(Window2[] windows) {
        this.windows = windows;
        return this;
    }
}