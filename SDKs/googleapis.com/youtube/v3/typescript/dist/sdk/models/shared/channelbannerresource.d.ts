import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A channel banner returned as the response to a channel_banner.insert call.
 */
export declare class ChannelBannerResource extends SpeakeasyBase {
    etag?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#channelBannerResource".
     */
    kind?: string;
    /**
     * The URL of this banner image.
     */
    url?: string;
}
