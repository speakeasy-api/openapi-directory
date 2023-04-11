import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for CloudChannelService.ListTransferableOffers
 */
export declare class GoogleCloudChannelV1ListTransferableOffersRequest extends SpeakeasyBase {
    /**
     * Customer's Cloud Identity ID
     */
    cloudIdentityId?: string;
    /**
     * A reseller should create a customer and use the resource name of that customer here.
     */
    customerName?: string;
    /**
     * Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".
     */
    languageCode?: string;
    /**
     * Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 offers. The maximum value is 1000; the server will coerce values above 1000.
     */
    pageSize?: number;
    /**
     * A token for a page of results other than the first page. Obtained using ListTransferableOffersResponse.next_page_token of the previous CloudChannelService.ListTransferableOffers call.
     */
    pageToken?: string;
    /**
     * Required. The SKU to look up Offers for.
     */
    sku?: string;
}
