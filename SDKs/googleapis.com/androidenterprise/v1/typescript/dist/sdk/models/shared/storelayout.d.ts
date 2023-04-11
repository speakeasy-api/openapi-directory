import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user.
 */
export declare enum StoreLayoutStoreLayoutTypeEnum {
    Unknown = "unknown",
    Basic = "basic",
    Custom = "custom"
}
/**
 * General setting for the managed Google Play store layout, currently only specifying the page to display the first time the store is opened.
 */
export declare class StoreLayout extends SpeakeasyBase {
    /**
     * The ID of the store page to be used as the homepage. The homepage is the first page shown in the managed Google Play Store. Not specifying a homepage is equivalent to setting the store layout type to "basic".
     */
    homepageId?: string;
    /**
     * The store layout type. By default, this value is set to "basic" if the homepageId field is not set, and to "custom" otherwise. If set to "basic", the layout will consist of all approved apps that have been whitelisted for the user.
     */
    storeLayoutType?: StoreLayoutStoreLayoutTypeEnum;
}
