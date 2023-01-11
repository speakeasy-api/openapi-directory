package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamicLinkInfo
 * Information about a Dynamic Link.
**/
public class DynamicLinkInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsInfo")
    public AnalyticsInfo analyticsInfo;
    public DynamicLinkInfo withAnalyticsInfo(AnalyticsInfo analyticsInfo) {
        this.analyticsInfo = analyticsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidInfo")
    public AndroidInfo androidInfo;
    public DynamicLinkInfo withAndroidInfo(AndroidInfo androidInfo) {
        this.androidInfo = androidInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desktopInfo")
    public DesktopInfo desktopInfo;
    public DynamicLinkInfo withDesktopInfo(DesktopInfo desktopInfo) {
        this.desktopInfo = desktopInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainUriPrefix")
    public String domainUriPrefix;
    public DynamicLinkInfo withDomainUriPrefix(String domainUriPrefix) {
        this.domainUriPrefix = domainUriPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicLinkDomain")
    public String dynamicLinkDomain;
    public DynamicLinkInfo withDynamicLinkDomain(String dynamicLinkDomain) {
        this.dynamicLinkDomain = dynamicLinkDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosInfo")
    public IosInfo iosInfo;
    public DynamicLinkInfo withIosInfo(IosInfo iosInfo) {
        this.iosInfo = iosInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;
    public DynamicLinkInfo withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("navigationInfo")
    public NavigationInfo navigationInfo;
    public DynamicLinkInfo withNavigationInfo(NavigationInfo navigationInfo) {
        this.navigationInfo = navigationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socialMetaTagInfo")
    public SocialMetaTagInfo socialMetaTagInfo;
    public DynamicLinkInfo withSocialMetaTagInfo(SocialMetaTagInfo socialMetaTagInfo) {
        this.socialMetaTagInfo = socialMetaTagInfo;
        return this;
    }
}