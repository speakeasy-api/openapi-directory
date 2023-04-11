import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSettings } from "./channelsettings";
import { ImageSettings } from "./imagesettings";
import { PropertyValue } from "./propertyvalue";
import { WatchSettings } from "./watchsettings";
/**
 * Branding properties of a YouTube channel.
 */
export declare class ChannelBrandingSettings extends SpeakeasyBase {
    /**
     * Branding properties for the channel view.
     */
    channel?: ChannelSettings;
    /**
     * Additional experimental branding properties.
     */
    hints?: PropertyValue[];
    /**
     * Branding properties for images associated with the channel.
     */
    image?: ImageSettings;
    /**
     * Branding properties for the watch. All deprecated.
     */
    watch?: WatchSettings;
}
