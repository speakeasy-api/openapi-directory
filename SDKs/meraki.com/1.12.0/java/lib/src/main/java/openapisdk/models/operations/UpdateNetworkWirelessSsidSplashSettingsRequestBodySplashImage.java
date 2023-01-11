package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage
 * The image used in the splash page.
**/
public class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension")
    public String extension;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage withExtension(String extension) {
        this.extension = extension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("md5")
    public String md5;
    public UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage withMd5(String md5) {
        this.md5 = md5;
        return this;
    }
}