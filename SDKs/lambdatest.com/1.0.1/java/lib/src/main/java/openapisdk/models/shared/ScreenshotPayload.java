package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScreenshotPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callback_url")
    public String callbackUrl;
    public ScreenshotPayload withCallbackUrl(String callbackUrl) {
        this.callbackUrl = callbackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public ScreenshotPayloadConfigs configs;
    public ScreenshotPayload withConfigs(ScreenshotPayloadConfigs configs) {
        this.configs = configs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defer_time")
    public Double deferTime;
    public ScreenshotPayload withDeferTime(Double deferTime) {
        this.deferTime = deferTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public Boolean email;
    public ScreenshotPayload withEmail(Boolean email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mac_res")
    public String macRes;
    public ScreenshotPayload withMacRes(String macRes) {
        this.macRes = macRes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public ScreenshotPayload withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tunnel")
    public Boolean tunnel;
    public ScreenshotPayload withTunnel(Boolean tunnel) {
        this.tunnel = tunnel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tunnel_identifier")
    public String tunnelIdentifier;
    public ScreenshotPayload withTunnelIdentifier(String tunnelIdentifier) {
        this.tunnelIdentifier = tunnelIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ScreenshotPayload withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public ScreenshotPayload withUsername(String username) {
        this.username = username;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("win_res")
    public String winRes;
    public ScreenshotPayload withWinRes(String winRes) {
        this.winRes = winRes;
        return this;
    }
}