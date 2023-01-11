package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Setup {
    @JsonProperty("qr_ssid_suffix")
    public String qrSsidSuffix;
    public Setup withQrSsidSuffix(String qrSsidSuffix) {
        this.qrSsidSuffix = qrSsidSuffix;
        return this;
    }
    @JsonProperty("setup_state")
    public Integer setupState;
    public Setup withSetupState(Integer setupState) {
        this.setupState = setupState;
        return this;
    }
    @JsonProperty("ssid_suffix")
    public String ssidSuffix;
    public Setup withSsidSuffix(String ssidSuffix) {
        this.ssidSuffix = ssidSuffix;
        return this;
    }
    @JsonProperty("stats")
    public Stats stats;
    public Setup withStats(Stats stats) {
        this.stats = stats;
        return this;
    }
    @JsonProperty("tos_accepted")
    public Boolean tosAccepted;
    public Setup withTosAccepted(Boolean tosAccepted) {
        this.tosAccepted = tosAccepted;
        return this;
    }
}