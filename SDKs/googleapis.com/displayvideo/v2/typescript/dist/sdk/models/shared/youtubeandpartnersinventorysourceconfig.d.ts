import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings that control what YouTube related inventories the YouTube and Partners line item will target.
 */
export declare class YoutubeAndPartnersInventorySourceConfig extends SpeakeasyBase {
    /**
     * Whether to target inventory on the YouTube search results page.
     */
    includeYoutubeSearch?: boolean;
    /**
     * Whether to target inventory on a collection of partner sites and apps that follow the same brand safety standards as YouTube.
     */
    includeYoutubeVideoPartners?: boolean;
    /**
     * Whether to target inventory of channels and videos on YouTube and YouTube videos embedded on other sites.
     */
    includeYoutubeVideos?: boolean;
}
