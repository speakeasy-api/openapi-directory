import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseFcmDataV1beta1AndroidDeliveryData } from "./googlefirebasefcmdatav1beta1androiddeliverydata";
/**
 * Response message for ListAndroidDeliveryData.
 */
export declare class GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse extends SpeakeasyBase {
    /**
     * The delivery data for the provided app. There will be one entry per combination of app, date, and analytics label.
     */
    androidDeliveryData?: GoogleFirebaseFcmDataV1beta1AndroidDeliveryData[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
