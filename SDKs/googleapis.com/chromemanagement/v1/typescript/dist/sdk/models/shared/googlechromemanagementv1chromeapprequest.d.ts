import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of an app installation request.
 */
export declare class GoogleChromeManagementV1ChromeAppRequest extends SpeakeasyBase {
    /**
     * Output only. Format: app_details=customers/{customer_id}/apps/chrome/{app_id}
     */
    appDetails?: string;
    /**
     * Output only. Unique store identifier for the app. Example: "gmbmikajjgmnabiglmofipeabaddhgne" for the Save to Google Drive Chrome extension.
     */
    appId?: string;
    /**
     * Output only. The uri for the detail page of the item.
     */
    detailUri?: string;
    /**
     * Output only. App's display name.
     */
    displayName?: string;
    /**
     * Output only. A link to an image that can be used as an icon for the product.
     */
    iconUri?: string;
    /**
     * Output only. The timestamp of the most recently made request for this app.
     */
    latestRequestTime?: string;
    /**
     * Output only. Total count of requests for this app.
     */
    requestCount?: string;
}
