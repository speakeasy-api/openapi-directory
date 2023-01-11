package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IosInfo
 * iOS related attributes to the Dynamic Link..
**/
public class IosInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosAppStoreId")
    public String iosAppStoreId;
    public IosInfo withIosAppStoreId(String iosAppStoreId) {
        this.iosAppStoreId = iosAppStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosBundleId")
    public String iosBundleId;
    public IosInfo withIosBundleId(String iosBundleId) {
        this.iosBundleId = iosBundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosCustomScheme")
    public String iosCustomScheme;
    public IosInfo withIosCustomScheme(String iosCustomScheme) {
        this.iosCustomScheme = iosCustomScheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosFallbackLink")
    public String iosFallbackLink;
    public IosInfo withIosFallbackLink(String iosFallbackLink) {
        this.iosFallbackLink = iosFallbackLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosIpadBundleId")
    public String iosIpadBundleId;
    public IosInfo withIosIpadBundleId(String iosIpadBundleId) {
        this.iosIpadBundleId = iosIpadBundleId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosIpadFallbackLink")
    public String iosIpadFallbackLink;
    public IosInfo withIosIpadFallbackLink(String iosIpadFallbackLink) {
        this.iosIpadFallbackLink = iosIpadFallbackLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosMinimumVersion")
    public String iosMinimumVersion;
    public IosInfo withIosMinimumVersion(String iosMinimumVersion) {
        this.iosMinimumVersion = iosMinimumVersion;
        return this;
    }
}