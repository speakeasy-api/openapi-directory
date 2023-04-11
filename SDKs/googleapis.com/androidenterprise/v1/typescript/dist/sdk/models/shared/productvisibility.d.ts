import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProductVisibilityTracksEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}
/**
 * A product to be made visible to a user.
 */
export declare class ProductVisibility extends SpeakeasyBase {
    /**
     * The product ID to make visible to the user. Required for each item in the productVisibility list.
     */
    productId?: string;
    /**
     * Grants the user visibility to the specified product track(s), identified by trackIds.
     */
    trackIds?: string[];
    /**
     * Deprecated. Use trackIds instead.
     */
    tracks?: ProductVisibilityTracksEnum[];
}
