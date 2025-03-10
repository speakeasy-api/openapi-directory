import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
/**
 * The role of this asset for the creative.
 */
export declare enum AssetAssociationRoleEnum {
    AssetRoleUnspecified = "ASSET_ROLE_UNSPECIFIED",
    AssetRoleMain = "ASSET_ROLE_MAIN",
    AssetRoleBackup = "ASSET_ROLE_BACKUP",
    AssetRolePoliteLoad = "ASSET_ROLE_POLITE_LOAD",
    AssetRoleHeadline = "ASSET_ROLE_HEADLINE",
    AssetRoleLongHeadline = "ASSET_ROLE_LONG_HEADLINE",
    AssetRoleBody = "ASSET_ROLE_BODY",
    AssetRoleLongBody = "ASSET_ROLE_LONG_BODY",
    AssetRoleCaptionUrl = "ASSET_ROLE_CAPTION_URL",
    AssetRoleCallToAction = "ASSET_ROLE_CALL_TO_ACTION",
    AssetRoleAdvertiserName = "ASSET_ROLE_ADVERTISER_NAME",
    AssetRolePrice = "ASSET_ROLE_PRICE",
    AssetRoleAndroidAppId = "ASSET_ROLE_ANDROID_APP_ID",
    AssetRoleIosAppId = "ASSET_ROLE_IOS_APP_ID",
    AssetRoleRating = "ASSET_ROLE_RATING",
    AssetRoleIcon = "ASSET_ROLE_ICON",
    AssetRoleCoverImage = "ASSET_ROLE_COVER_IMAGE"
}
/**
 * Asset association for the creative.
 */
export declare class AssetAssociation extends SpeakeasyBase {
    /**
     * A single asset.
     */
    asset?: Asset;
    /**
     * The role of this asset for the creative.
     */
    role?: AssetAssociationRoleEnum;
}
