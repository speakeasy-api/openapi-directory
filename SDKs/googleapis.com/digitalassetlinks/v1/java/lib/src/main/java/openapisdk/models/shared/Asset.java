package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Asset
 * Uniquely identifies an asset. A digital asset is an identifiable and addressable online entity that typically provides some service or content. Examples of assets are websites, Android apps, Twitter feeds, and Plus Pages.
**/
public class Asset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidApp")
    public AndroidAppAsset androidApp;
    public Asset withAndroidApp(AndroidAppAsset androidApp) {
        this.androidApp = androidApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("web")
    public WebAsset web;
    public Asset withWeb(WebAsset web) {
        this.web = web;
        return this;
    }
}