import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Promotion } from "./googlecloudpaymentsresellersubscriptionv1promotion";
/**
 * Successful response
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The promotions for the specified partner.
     */
    promotions?: GoogleCloudPaymentsResellerSubscriptionV1Promotion[];
}
