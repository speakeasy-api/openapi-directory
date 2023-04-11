import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Product } from "./googlecloudpaymentsresellersubscriptionv1product";
/**
 * Successful response
 */
export declare class GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The products for the specified partner.
     */
    products?: GoogleCloudPaymentsResellerSubscriptionV1Product[];
}
