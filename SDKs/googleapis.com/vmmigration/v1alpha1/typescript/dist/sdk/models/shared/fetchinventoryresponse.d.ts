import { SpeakeasyBase } from "../../../internal/utils";
import { AwsVmsDetails } from "./awsvmsdetails";
import { VmwareVmsDetails } from "./vmwarevmsdetails";
/**
 * Response message for fetchInventory.
 */
export declare class FetchInventoryResponse extends SpeakeasyBase {
    /**
     * AWSVmsDetails describes VMs in AWS.
     */
    awsVms?: AwsVmsDetails;
    /**
     * Output only. A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Output only. The timestamp when the source was last queried (if the result is from the cache).
     */
    updateTime?: string;
    /**
     * VmwareVmsDetails describes VMs in vCenter.
     */
    vmwareVms?: VmwareVmsDetails;
}
