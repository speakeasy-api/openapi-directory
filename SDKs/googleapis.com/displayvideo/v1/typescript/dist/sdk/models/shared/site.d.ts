import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single site. Sites are apps or websites belonging to a channel.
 */
export declare class SiteInput extends SpeakeasyBase {
    /**
     * Required. The app ID or URL of the site. Must be UTF-8 encoded with a maximum length of 240 bytes.
     */
    urlOrAppId?: string;
}
/**
 * A single site. Sites are apps or websites belonging to a channel.
 */
export declare class Site extends SpeakeasyBase {
    /**
     * Output only. The resource name of the site.
     */
    name?: string;
    /**
     * Required. The app ID or URL of the site. Must be UTF-8 encoded with a maximum length of 240 bytes.
     */
    urlOrAppId?: string;
}
