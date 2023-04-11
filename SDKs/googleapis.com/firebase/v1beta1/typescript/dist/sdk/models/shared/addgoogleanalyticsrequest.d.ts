import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddGoogleAnalyticsRequest extends SpeakeasyBase {
    /**
     * The ID for the existing [Google Analytics account](http://www.google.com/analytics/) that you want to link with the `FirebaseProject`. Specifying this field will provision a new Google Analytics property in your Google Analytics account and associate the new property with the `FirebaseProject`.
     */
    analyticsAccountId?: string;
    /**
     * The ID for the existing Google Analytics property that you want to associate with the `FirebaseProject`.
     */
    analyticsPropertyId?: string;
}
