import { SpeakeasyBase } from "../../../internal/utils";
import { MachineSeries } from "./machineseries";
/**
 * The type of machines to consider when calculating virtual machine migration insights and recommendations. Not all machine types are available in all zones and regions.
 */
export declare class MachinePreferences extends SpeakeasyBase {
    /**
     * Compute Engine machine series to consider for insights and recommendations. If empty, no restriction is applied on the machine series.
     */
    allowedMachineSeries?: MachineSeries[];
}
