import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ProductService.RemoveLocalInventories method.
 */
export declare class GoogleCloudRetailV2betaRemoveLocalInventoriesRequest extends SpeakeasyBase {
    /**
     * If set to true, and the Product is not found, the local inventory removal request will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.
     */
    allowMissing?: boolean;
    /**
     * Required. A list of place IDs to have their inventory deleted. At most 3000 place IDs are allowed per request.
     */
    placeIds?: string[];
    /**
     * The time when the inventory deletions are issued. Used to prevent out-of-order updates and deletions on local inventory fields. If not provided, the internal system time will be used.
     */
    removeTime?: string;
}
