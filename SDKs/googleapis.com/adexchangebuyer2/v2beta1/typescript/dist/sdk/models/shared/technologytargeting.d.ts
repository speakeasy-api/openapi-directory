import { SpeakeasyBase } from "../../../internal/utils";
import { CriteriaTargeting } from "./criteriatargeting";
import { OperatingSystemTargeting } from "./operatingsystemtargeting";
/**
 * Represents targeting about various types of technology.
 */
export declare class TechnologyTargeting extends SpeakeasyBase {
    /**
     * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.
     */
    deviceCapabilityTargeting?: CriteriaTargeting;
    /**
     * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.
     */
    deviceCategoryTargeting?: CriteriaTargeting;
    /**
     * Represents targeting information for operating systems.
     */
    operatingSystemTargeting?: OperatingSystemTargeting;
}
