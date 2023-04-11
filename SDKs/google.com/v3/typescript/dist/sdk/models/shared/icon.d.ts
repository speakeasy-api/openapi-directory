import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IconDisapprovalReasonsEnum {
    ImageDisapprovalReasonUnspecified = "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED",
    NotLikeSite = "NOT_LIKE_SITE",
    Offensive = "OFFENSIVE",
    LowQuality = "LOW_QUALITY",
    Animated = "ANIMATED",
    BadBackground = "BAD_BACKGROUND",
    TextTooSmall = "TEXT_TOO_SMALL"
}
/**
 * Output only. The icon's current state.
 */
export declare enum IconStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    New = "NEW",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
/**
 * Information about a partner's icon.
 */
export declare class Icon extends SpeakeasyBase {
    /**
     * Output only. The icon's disapproval reason(s). Only applies to icons with `REJECTED` state.
     */
    disapprovalReasons?: IconDisapprovalReasonsEnum[];
    /**
     * Output only. The approved icon's Google-hosted URI. Only applies to icons with `APPROVED` state.
     */
    iconUri?: string;
    /**
     * Required. Input only. The icon contents, which must be in PNG format, or convertible to PNG.
     */
    imageData?: string;
    /**
     * Required. Output only. The resource name for the icon in the format `accounts/{account_id}/icons/{icon_id}`. Google generates the `icon_id` during the `create` operation. Use the `icon_id` to associate the icon with a brand using the [accounts.brands](/hotels/hotel-prices/api-reference/rest/v3/accounts.brands#resource:-brand) API.
     */
    name?: string;
    /**
     * Optional. Value for tracking the icon. It could be the primary key to your icon in your system, or the icon's filename. Google does not use this value.
     */
    reference?: string;
    /**
     * Output only. The icon's current state.
     */
    state?: IconStateEnum;
}
/**
 * Information about a partner's icon.
 */
export declare class IconInput extends SpeakeasyBase {
    /**
     * Required. Input only. The icon contents, which must be in PNG format, or convertible to PNG.
     */
    imageData?: string;
    /**
     * Optional. Value for tracking the icon. It could be the primary key to your icon in your system, or the icon's filename. Google does not use this value.
     */
    reference?: string;
}
