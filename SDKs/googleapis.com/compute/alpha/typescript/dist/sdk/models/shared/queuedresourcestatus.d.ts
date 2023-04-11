import { SpeakeasyBase } from "../../../internal/utils";
import { QueuedResourceStatusFailedData } from "./queuedresourcestatusfaileddata";
import { QueuingPolicy } from "./queuingpolicy";
/**
 * [Output only] Result of queuing and provisioning based on deferred capacity.
 */
export declare class QueuedResourceStatus extends SpeakeasyBase {
    /**
     * Additional status detail for the FAILED state.
     */
    failedData?: QueuedResourceStatusFailedData;
    /**
     * [Output only] Fully qualified URL of the provisioning GCE operation to track the provisioning along with provisioning errors. The referenced operation may not exist after having been deleted or expired.
     */
    provisioningOperations?: string[];
    /**
     * Queuing parameters for the requested deferred capacity.
     */
    queuingPolicy?: QueuingPolicy;
}
