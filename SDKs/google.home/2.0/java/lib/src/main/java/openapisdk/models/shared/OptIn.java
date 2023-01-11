package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OptIn {
    @JsonProperty("audio_hdr")
    public Boolean audioHdr;
    public OptIn withAudioHdr(Boolean audioHdr) {
        this.audioHdr = audioHdr;
        return this;
    }
    @JsonProperty("audio_surround_mode")
    public Integer audioSurroundMode;
    public OptIn withAudioSurroundMode(Integer audioSurroundMode) {
        this.audioSurroundMode = audioSurroundMode;
        return this;
    }
    @JsonProperty("autoplay_on_signal")
    public Boolean autoplayOnSignal;
    public OptIn withAutoplayOnSignal(Boolean autoplayOnSignal) {
        this.autoplayOnSignal = autoplayOnSignal;
        return this;
    }
    @JsonProperty("cloud_ipc")
    public Boolean cloudIpc;
    public OptIn withCloudIpc(Boolean cloudIpc) {
        this.cloudIpc = cloudIpc;
        return this;
    }
    @JsonProperty("hdmi_prefer_50hz")
    public Boolean hdmiPrefer50hz;
    public OptIn withHdmiPrefer50hz(Boolean hdmiPrefer50hz) {
        this.hdmiPrefer50hz = hdmiPrefer50hz;
        return this;
    }
    @JsonProperty("hdmi_prefer_high_fps")
    public Boolean hdmiPreferHighFps;
    public OptIn withHdmiPreferHighFps(Boolean hdmiPreferHighFps) {
        this.hdmiPreferHighFps = hdmiPreferHighFps;
        return this;
    }
    @JsonProperty("managed_mode")
    public Boolean managedMode;
    public OptIn withManagedMode(Boolean managedMode) {
        this.managedMode = managedMode;
        return this;
    }
    @JsonProperty("opencast")
    public Boolean opencast;
    public OptIn withOpencast(Boolean opencast) {
        this.opencast = opencast;
        return this;
    }
    @JsonProperty("preview_channel")
    public Boolean previewChannel;
    public OptIn withPreviewChannel(Boolean previewChannel) {
        this.previewChannel = previewChannel;
        return this;
    }
    @JsonProperty("remote_ducking")
    public Boolean remoteDucking;
    public OptIn withRemoteDucking(Boolean remoteDucking) {
        this.remoteDucking = remoteDucking;
        return this;
    }
    @JsonProperty("stats")
    public Boolean stats;
    public OptIn withStats(Boolean stats) {
        this.stats = stats;
        return this;
    }
    @JsonProperty("ui_flipped")
    public Boolean uiFlipped;
    public OptIn withUiFlipped(Boolean uiFlipped) {
        this.uiFlipped = uiFlipped;
        return this;
    }
    @JsonProperty("wpa3_support_enabled")
    public Boolean wpa3SupportEnabled;
    public OptIn withWpa3SupportEnabled(Boolean wpa3SupportEnabled) {
        this.wpa3SupportEnabled = wpa3SupportEnabled;
        return this;
    }
}