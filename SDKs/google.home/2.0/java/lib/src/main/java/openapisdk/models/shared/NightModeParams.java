package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NightModeParams {
    @JsonProperty("device_override_do_not_disturb")
    public Integer deviceOverrideDoNotDisturb;
    public NightModeParams withDeviceOverrideDoNotDisturb(Integer deviceOverrideDoNotDisturb) {
        this.deviceOverrideDoNotDisturb = deviceOverrideDoNotDisturb;
        return this;
    }
    @JsonProperty("do_not_disturb")
    public Boolean doNotDisturb;
    public NightModeParams withDoNotDisturb(Boolean doNotDisturb) {
        this.doNotDisturb = doNotDisturb;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public NightModeParams withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("led_brightness")
    public Double ledBrightness;
    public NightModeParams withLedBrightness(Double ledBrightness) {
        this.ledBrightness = ledBrightness;
        return this;
    }
    @JsonProperty("volume")
    public Double volume;
    public NightModeParams withVolume(Double volume) {
        this.volume = volume;
        return this;
    }
    @JsonProperty("windows")
    public Window[] windows;
    public NightModeParams withWindows(Window[] windows) {
        this.windows = windows;
        return this;
    }
}