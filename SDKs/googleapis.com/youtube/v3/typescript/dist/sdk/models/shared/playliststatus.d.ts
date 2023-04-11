import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The playlist's privacy status.
 */
export declare enum PlaylistStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
export declare class PlaylistStatus extends SpeakeasyBase {
    /**
     * The playlist's privacy status.
     */
    privacyStatus?: PlaylistStatusPrivacyStatusEnum;
}
