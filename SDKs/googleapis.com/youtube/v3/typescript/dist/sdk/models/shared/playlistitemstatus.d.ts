import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This resource's privacy status.
 */
export declare enum PlaylistItemStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
/**
 * Information about the playlist item's privacy status.
 */
export declare class PlaylistItemStatus extends SpeakeasyBase {
    /**
     * This resource's privacy status.
     */
    privacyStatus?: PlaylistItemStatusPrivacyStatusEnum;
}
