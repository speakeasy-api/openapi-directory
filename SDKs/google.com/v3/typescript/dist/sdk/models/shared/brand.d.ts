import { SpeakeasyBase } from "../../../internal/utils";
import { DisplayNameDisapprovalReason } from "./displaynamedisapprovalreason";
import { LocalizedText } from "./localizedtext";
/**
 * Brand-level icon and display name configuration. Once approved, the icon and display name appear in the search results for properties that the partner has assigned to this brand.
 */
export declare class BrandInput extends SpeakeasyBase {
    /**
     * Input only. The name Google displays for the brand's properties. Setting the display names is only necessary if you want to override the landing page display name or account-level display name for the brand. Google reviews the display names for appropriate content. When there are multiple languages, Google will only show the display names once Google approves all the languages.
     */
    displayNames?: LocalizedText[];
    /**
     * Input only. The brand's [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource) identifying the brand's icon. The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`.
     */
    icon?: string;
}
/**
 * Output only. The brand's display names review state, which applies to all display name language entries. If there are both submitted and active display names, this refers to the submitted display names.
 */
export declare enum BrandDisplayNameStateEnum {
    ReviewStateUnspecified = "REVIEW_STATE_UNSPECIFIED",
    ReviewStateNew = "REVIEW_STATE_NEW",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
export declare enum BrandIconDisapprovalReasonsEnum {
    ImageDisapprovalReasonUnspecified = "IMAGE_DISAPPROVAL_REASON_UNSPECIFIED",
    NotLikeSite = "NOT_LIKE_SITE",
    Offensive = "OFFENSIVE",
    LowQuality = "LOW_QUALITY",
    Animated = "ANIMATED",
    BadBackground = "BAD_BACKGROUND",
    TextTooSmall = "TEXT_TOO_SMALL"
}
/**
 * Output only. The brand's icon's review state. If there are both submitted and active icons, this refers to the submitted icon.
 */
export declare enum BrandIconStateEnum {
    ReviewStateUnspecified = "REVIEW_STATE_UNSPECIFIED",
    ReviewStateNew = "REVIEW_STATE_NEW",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
/**
 * Brand-level icon and display name configuration. Once approved, the icon and display name appear in the search results for properties that the partner has assigned to this brand.
 */
export declare class Brand extends SpeakeasyBase {
    /**
     * Output only. The brand's active display names in all provided languages, only present if the display name is approved for all provided languages.
     */
    activeDisplayNames?: LocalizedText[];
    /**
     * Output only. The brand's active [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. An active icon is one that has been approved.
     */
    activeIcon?: string;
    /**
     * Output only. URL of the active icon, only present when the icon has been approved.
     */
    activeIconUri?: string;
    /**
     * Output only. Display name's disapproval reason. Only applies to display names with the review state 'REJECTED'.
     */
    displayNameDisapprovalReason?: DisplayNameDisapprovalReason[];
    /**
     * Output only. The brand's display names review state, which applies to all display name language entries. If there are both submitted and active display names, this refers to the submitted display names.
     */
    displayNameState?: BrandDisplayNameStateEnum;
    /**
     * Input only. The name Google displays for the brand's properties. Setting the display names is only necessary if you want to override the landing page display name or account-level display name for the brand. Google reviews the display names for appropriate content. When there are multiple languages, Google will only show the display names once Google approves all the languages.
     */
    displayNames?: LocalizedText[];
    /**
     * Input only. The brand's [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource) identifying the brand's icon. The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`.
     */
    icon?: string;
    /**
     * Output only. The icon's disapproval reason(s). Only applies to submitted icons with `REJECTED` state.
     */
    iconDisapprovalReasons?: BrandIconDisapprovalReasonsEnum[];
    /**
     * Output only. The brand's icon's review state. If there are both submitted and active icons, this refers to the submitted icon.
     */
    iconState?: BrandIconStateEnum;
    /**
     * Output only. The resource name for the brand in the format `accounts/{account_id}/brands/{brand_id}`. The `brand_id` corresponds to the partner's brand identifier used for landing page matching and the property-level brand identifier. A default brand is applied to properties that do not have a brand. The `brand_id` of the default brand is `NO_BRAND_ID`. It can be fetched and updated like any configured brand.
     */
    name?: string;
    /**
     * Output only. The number of properties with the corresponding brand ID.
     */
    propertyCount?: string;
    /**
     * Output only. The brand's submitted display names in all provided languages, only present if the display name is new or rejected for any language.
     */
    submittedDisplayNames?: LocalizedText[];
    /**
     * Output only. The brand's submitted [accounts.icon](/hotels/hotel-prices/api-reference/rest/v3/accounts.icons#resource:-iconresource). The value refers to the icons's resource name in the format `accounts/{account_id}/icons/{icon_id}`. A submitted icon is one that is new or rejected.
     */
    submittedIcon?: string;
}
