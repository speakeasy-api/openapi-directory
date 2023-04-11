import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Customer } from "./googlecloudchannelv1customer";
/**
 * Response message for CloudChannelService.ListCustomers.
 */
export declare class GoogleCloudChannelV1ListCustomersResponse extends SpeakeasyBase {
    /**
     * The customers belonging to a reseller or distributor.
     */
    customers?: GoogleCloudChannelV1Customer[];
    /**
     * A token to retrieve the next page of results. Pass to ListCustomersRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
}
