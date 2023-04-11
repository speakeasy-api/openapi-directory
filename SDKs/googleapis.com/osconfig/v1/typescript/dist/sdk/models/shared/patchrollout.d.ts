import { SpeakeasyBase } from "../../../internal/utils";
import { FixedOrPercent } from "./fixedorpercent";
/**
 * Mode of the patch rollout.
 */
export declare enum PatchRolloutModeEnum {
    ModeUnspecified = "MODE_UNSPECIFIED",
    ZoneByZone = "ZONE_BY_ZONE",
    ConcurrentZones = "CONCURRENT_ZONES"
}
/**
 * Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
 */
export declare class PatchRollout extends SpeakeasyBase {
    /**
     * Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value.
     */
    disruptionBudget?: FixedOrPercent;
    /**
     * Mode of the patch rollout.
     */
    mode?: PatchRolloutModeEnum;
}
