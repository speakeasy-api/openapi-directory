/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DynamicLinkInfo - Information about a Dynamic Link.
 */
public class DynamicLinkInfo {
    /**
     * Tracking parameters supported by Dynamic Link.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyticsInfo")
    public AnalyticsInfo analyticsInfo;

    public DynamicLinkInfo withAnalyticsInfo(AnalyticsInfo analyticsInfo) {
        this.analyticsInfo = analyticsInfo;
        return this;
    }
    
    /**
     * Android related attributes to the Dynamic Link.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidInfo")
    public AndroidInfo androidInfo;

    public DynamicLinkInfo withAndroidInfo(AndroidInfo androidInfo) {
        this.androidInfo = androidInfo;
        return this;
    }
    
    /**
     * Desktop related attributes to the Dynamic Link.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desktopInfo")
    public DesktopInfo desktopInfo;

    public DynamicLinkInfo withDesktopInfo(DesktopInfo desktopInfo) {
        this.desktopInfo = desktopInfo;
        return this;
    }
    
    /**
     * E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps More examples can be found in description of getNormalizedUriPrefix in j/c/g/firebase/dynamiclinks/uri/DdlDomain.java Will fallback to dynamic_link_domain is this field is missing
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainUriPrefix")
    public String domainUriPrefix;

    public DynamicLinkInfo withDomainUriPrefix(String domainUriPrefix) {
        this.domainUriPrefix = domainUriPrefix;
        return this;
    }
    
    /**
     * Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl [Learn more](https://firebase.google.com/docs/dynamic-links/android/receive) on how to set up Dynamic Link domain associated with your Firebase project. Required if missing domain_uri_prefix.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dynamicLinkDomain")
    public String dynamicLinkDomain;

    public DynamicLinkInfo withDynamicLinkDomain(String dynamicLinkDomain) {
        this.dynamicLinkDomain = dynamicLinkDomain;
        return this;
    }
    
    /**
     * iOS related attributes to the Dynamic Link..
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iosInfo")
    public IosInfo iosInfo;

    public DynamicLinkInfo withIosInfo(IosInfo iosInfo) {
        this.iosInfo = iosInfo;
        return this;
    }
    
    /**
     * The link your app will open, You can specify any URL your app can handle. This link must be a well-formatted URL, be properly URL-encoded, and use the HTTP or HTTPS scheme. See 'link' parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). Required.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public String link;

    public DynamicLinkInfo withLink(String link) {
        this.link = link;
        return this;
    }
    
    /**
     * Information of navigation behavior.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("navigationInfo")
    public NavigationInfo navigationInfo;

    public DynamicLinkInfo withNavigationInfo(NavigationInfo navigationInfo) {
        this.navigationInfo = navigationInfo;
        return this;
    }
    
    /**
     * Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("socialMetaTagInfo")
    public SocialMetaTagInfo socialMetaTagInfo;

    public DynamicLinkInfo withSocialMetaTagInfo(SocialMetaTagInfo socialMetaTagInfo) {
        this.socialMetaTagInfo = socialMetaTagInfo;
        return this;
    }
    
    public DynamicLinkInfo(){}
}
