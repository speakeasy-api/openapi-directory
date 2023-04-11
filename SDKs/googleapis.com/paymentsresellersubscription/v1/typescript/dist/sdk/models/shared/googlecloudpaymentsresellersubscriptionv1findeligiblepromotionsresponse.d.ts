import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Promotion } from "./googlecloudpaymentsresellersubscriptionv1promotion";
/**
 * Response containing the found promotions for the current user.
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The promotions for the current user.
     */
    promotions?: GoogleCloudPaymentsResellerSubscriptionV1Promotion[];
}
