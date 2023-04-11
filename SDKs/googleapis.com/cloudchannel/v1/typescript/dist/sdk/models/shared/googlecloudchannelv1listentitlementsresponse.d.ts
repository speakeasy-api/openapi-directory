import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1Entitlement } from "./googlecloudchannelv1entitlement";
/**
 * Response message for CloudChannelService.ListEntitlements.
 */
export declare class GoogleCloudChannelV1ListEntitlementsResponse extends SpeakeasyBase {
    /**
     * The reseller customer's entitlements.
     */
    entitlements?: GoogleCloudChannelV1Entitlement[];
    /**
     * A token to list the next page of results. Pass to ListEntitlementsRequest.page_token to obtain that page.
     */
    nextPageToken?: string;
}
