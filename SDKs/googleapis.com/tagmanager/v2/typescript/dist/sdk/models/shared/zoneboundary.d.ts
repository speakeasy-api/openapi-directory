import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
/**
 * Represents a Zone's boundaries.
 */
export declare class ZoneBoundary extends SpeakeasyBase {
    /**
     * The conditions that, when conjoined, make up the boundary.
     */
    condition?: Condition[];
    /**
     * Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.
     */
    customEvaluationTriggerId?: string[];
}
