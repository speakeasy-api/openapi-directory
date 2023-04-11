import { SpeakeasyBase } from "../../../internal/utils";
import { PartnerUnclaim } from "./partnerunclaim";
/**
 * Request to unclaim devices asynchronously in batch.
 */
export declare class UnclaimDevicesRequest extends SpeakeasyBase {
    /**
     * Required. The list of devices to unclaim.
     */
    unclaims?: PartnerUnclaim[];
}
