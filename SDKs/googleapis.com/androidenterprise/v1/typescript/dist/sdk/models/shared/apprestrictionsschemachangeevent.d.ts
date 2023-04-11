import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event generated when a new app version is uploaded to Google Play and its app restrictions schema changed. To fetch the app restrictions schema for an app, use Products.getAppRestrictionsSchema on the EMM API.
 */
export declare class AppRestrictionsSchemaChangeEvent extends SpeakeasyBase {
    /**
     * The id of the product (e.g. "app:com.google.android.gm") for which the app restriction schema changed. This field will always be present.
     */
    productId?: string;
}
