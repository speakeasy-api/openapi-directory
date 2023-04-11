import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for CloudChannelService.ListTransferableSkus
 */
export declare class GoogleCloudChannelV1ListTransferableSkusRequest extends SpeakeasyBase {
    /**
     * Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.
     */
    authToken?: string;
    /**
     * Customer's Cloud Identity ID
     */
    cloudIdentityId?: string;
    /**
     * A reseller is required to create a customer and use the resource name of the created customer here. Customer_name uses the format: accounts/{account_id}/customers/{customer_id}
     */
    customerName?: string;
    /**
     * The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US". Optional.
     */
    languageCode?: string;
    /**
     * The requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000. Optional.
     */
    pageSize?: number;
    /**
     * A token for a page of results other than the first page. Obtained using ListTransferableSkusResponse.next_page_token of the previous CloudChannelService.ListTransferableSkus call. Optional.
     */
    pageToken?: string;
}
