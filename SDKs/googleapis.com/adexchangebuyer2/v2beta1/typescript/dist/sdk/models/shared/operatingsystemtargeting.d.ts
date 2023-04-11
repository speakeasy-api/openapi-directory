import { SpeakeasyBase } from "../../../internal/utils";
import { CriteriaTargeting } from "./criteriatargeting";
/**
 * Represents targeting information for operating systems.
 */
export declare class OperatingSystemTargeting extends SpeakeasyBase {
    /**
     * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.
     */
    operatingSystemCriteria?: CriteriaTargeting;
    /**
     * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs.
     */
    operatingSystemVersionCriteria?: CriteriaTargeting;
}
