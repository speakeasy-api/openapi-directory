import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1EntitlementChange } from "./googlecloudchannelv1entitlementchange";
/**
 * Response message for CloudChannelService.ListEntitlementChanges
 */
export declare class GoogleCloudChannelV1ListEntitlementChangesResponse extends SpeakeasyBase {
    /**
     * The list of entitlement changes.
     */
    entitlementChanges?: GoogleCloudChannelV1EntitlementChange[];
    /**
     * A token to list the next page of results.
     */
    nextPageToken?: string;
}
