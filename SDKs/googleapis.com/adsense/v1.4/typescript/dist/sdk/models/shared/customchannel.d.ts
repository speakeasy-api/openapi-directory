import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The targeting information of this custom channel, if activated.
 */
export declare class CustomChannelTargetingInfo extends SpeakeasyBase {
    /**
     * The name used to describe this channel externally.
     */
    adsAppearOn?: string;
    /**
     * The external description of the channel.
     */
    description?: string;
    /**
     * The locations in which ads appear. (Only valid for content and mobile content ads (deprecated)). Acceptable values for content ads are: TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content ads (deprecated) are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS.
     */
    location?: string;
    /**
     * The language of the sites ads will be displayed on.
     */
    siteLanguage?: string;
}
/**
 * Successful response
 */
export declare class CustomChannel extends SpeakeasyBase {
    /**
     * Code of this custom channel, not necessarily unique across ad clients.
     */
    code?: string;
    /**
     * Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;
    /**
     * Kind of resource this is, in this case adsense#customChannel.
     */
    kind?: string;
    /**
     * Name of this custom channel.
     */
    name?: string;
    /**
     * The targeting information of this custom channel, if activated.
     */
    targetingInfo?: CustomChannelTargetingInfo;
}
