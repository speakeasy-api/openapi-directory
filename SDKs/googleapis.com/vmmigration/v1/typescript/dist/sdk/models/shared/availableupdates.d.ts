import { SpeakeasyBase } from "../../../internal/utils";
import { ApplianceVersion } from "./applianceversion";
/**
 * Holds informatiom about the available versions for upgrade.
 */
export declare class AvailableUpdates extends SpeakeasyBase {
    /**
     * Describes an appliance version.
     */
    inPlaceUpdate?: ApplianceVersion;
    /**
     * Describes an appliance version.
     */
    newDeployableAppliance?: ApplianceVersion;
}
