package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TechnologyTargeting
 * Technology Targeting.
**/
public class TechnologyTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("browsers")
    public Browser[] browsers;
    public TechnologyTargeting withBrowsers(Browser[] browsers) {
        this.browsers = browsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionTypes")
    public ConnectionType[] connectionTypes;
    public TechnologyTargeting withConnectionTypes(ConnectionType[] connectionTypes) {
        this.connectionTypes = connectionTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mobileCarriers")
    public MobileCarrier[] mobileCarriers;
    public TechnologyTargeting withMobileCarriers(MobileCarrier[] mobileCarriers) {
        this.mobileCarriers = mobileCarriers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystemVersions")
    public OperatingSystemVersion[] operatingSystemVersions;
    public TechnologyTargeting withOperatingSystemVersions(OperatingSystemVersion[] operatingSystemVersions) {
        this.operatingSystemVersions = operatingSystemVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operatingSystems")
    public OperatingSystem[] operatingSystems;
    public TechnologyTargeting withOperatingSystems(OperatingSystem[] operatingSystems) {
        this.operatingSystems = operatingSystems;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformTypes")
    public PlatformType[] platformTypes;
    public TechnologyTargeting withPlatformTypes(PlatformType[] platformTypes) {
        this.platformTypes = platformTypes;
        return this;
    }
}