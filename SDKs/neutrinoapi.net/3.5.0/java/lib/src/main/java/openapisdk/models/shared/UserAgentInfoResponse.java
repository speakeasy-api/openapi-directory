package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserAgentInfoResponse {
    @JsonProperty("browserName")
    public String browserName;
    public UserAgentInfoResponse withBrowserName(String browserName) {
        this.browserName = browserName;
        return this;
    }
    @JsonProperty("engine")
    public String engine;
    public UserAgentInfoResponse withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    @JsonProperty("engineVersion")
    public String engineVersion;
    public UserAgentInfoResponse withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    @JsonProperty("isAndroid")
    public Boolean isAndroid;
    public UserAgentInfoResponse withIsAndroid(Boolean isAndroid) {
        this.isAndroid = isAndroid;
        return this;
    }
    @JsonProperty("isIos")
    public Boolean isIos;
    public UserAgentInfoResponse withIsIos(Boolean isIos) {
        this.isIos = isIos;
        return this;
    }
    @JsonProperty("isMobile")
    public Boolean isMobile;
    public UserAgentInfoResponse withIsMobile(Boolean isMobile) {
        this.isMobile = isMobile;
        return this;
    }
    @JsonProperty("mobileBrand")
    public String mobileBrand;
    public UserAgentInfoResponse withMobileBrand(String mobileBrand) {
        this.mobileBrand = mobileBrand;
        return this;
    }
    @JsonProperty("mobileBrowser")
    public String mobileBrowser;
    public UserAgentInfoResponse withMobileBrowser(String mobileBrowser) {
        this.mobileBrowser = mobileBrowser;
        return this;
    }
    @JsonProperty("mobileModel")
    public String mobileModel;
    public UserAgentInfoResponse withMobileModel(String mobileModel) {
        this.mobileModel = mobileModel;
        return this;
    }
    @JsonProperty("mobileScreenHeight")
    public Integer mobileScreenHeight;
    public UserAgentInfoResponse withMobileScreenHeight(Integer mobileScreenHeight) {
        this.mobileScreenHeight = mobileScreenHeight;
        return this;
    }
    @JsonProperty("mobileScreenWidth")
    public Integer mobileScreenWidth;
    public UserAgentInfoResponse withMobileScreenWidth(Integer mobileScreenWidth) {
        this.mobileScreenWidth = mobileScreenWidth;
        return this;
    }
    @JsonProperty("operatingSystem")
    public String operatingSystem;
    public UserAgentInfoResponse withOperatingSystem(String operatingSystem) {
        this.operatingSystem = operatingSystem;
        return this;
    }
    @JsonProperty("operatingSystemFamily")
    public String operatingSystemFamily;
    public UserAgentInfoResponse withOperatingSystemFamily(String operatingSystemFamily) {
        this.operatingSystemFamily = operatingSystemFamily;
        return this;
    }
    @JsonProperty("operatingSystemVersion")
    public String operatingSystemVersion;
    public UserAgentInfoResponse withOperatingSystemVersion(String operatingSystemVersion) {
        this.operatingSystemVersion = operatingSystemVersion;
        return this;
    }
    @JsonProperty("producer")
    public String producer;
    public UserAgentInfoResponse withProducer(String producer) {
        this.producer = producer;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public UserAgentInfoResponse withType(String type) {
        this.type = type;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public UserAgentInfoResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}