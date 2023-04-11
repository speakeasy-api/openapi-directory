import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyticsInfo } from "./analyticsinfo";
import { AndroidInfo } from "./androidinfo";
import { DesktopInfo } from "./desktopinfo";
import { IosInfo } from "./iosinfo";
import { NavigationInfo } from "./navigationinfo";
import { SocialMetaTagInfo } from "./socialmetataginfo";
/**
 * Information about a Dynamic Link.
 */
export declare class DynamicLinkInfo extends SpeakeasyBase {
    /**
     * Tracking parameters supported by Dynamic Link.
     */
    analyticsInfo?: AnalyticsInfo;
    /**
     * Android related attributes to the Dynamic Link.
     */
    androidInfo?: AndroidInfo;
    /**
     * Desktop related attributes to the Dynamic Link.
     */
    desktopInfo?: DesktopInfo;
    /**
     * E.g. https://maps.app.goo.gl, https://maps.page.link, https://g.co/maps More examples can be found in description of getNormalizedUriPrefix in j/c/g/firebase/dynamiclinks/uri/DdlDomain.java Will fallback to dynamic_link_domain is this field is missing
     */
    domainUriPrefix?: string;
    /**
     * Dynamic Links domain that the project owns, e.g. abcd.app.goo.gl [Learn more](https://firebase.google.com/docs/dynamic-links/android/receive) on how to set up Dynamic Link domain associated with your Firebase project. Required if missing domain_uri_prefix.
     */
    dynamicLinkDomain?: string;
    /**
     * iOS related attributes to the Dynamic Link..
     */
    iosInfo?: IosInfo;
    /**
     * The link your app will open, You can specify any URL your app can handle. This link must be a well-formatted URL, be properly URL-encoded, and use the HTTP or HTTPS scheme. See 'link' parameters in the [documentation](https://firebase.google.com/docs/dynamic-links/create-manually). Required.
     */
    link?: string;
    /**
     * Information of navigation behavior.
     */
    navigationInfo?: NavigationInfo;
    /**
     * Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
     */
    socialMetaTagInfo?: SocialMetaTagInfo;
}
