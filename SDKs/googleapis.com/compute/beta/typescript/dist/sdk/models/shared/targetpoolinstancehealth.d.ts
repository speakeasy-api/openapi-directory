import { SpeakeasyBase } from "../../../internal/utils";
import { HealthStatus } from "./healthstatus";
/**
 * Successful response
 */
export declare class TargetPoolInstanceHealth extends SpeakeasyBase {
    healthStatus?: HealthStatus[];
    /**
     * [Output Only] Type of resource. Always compute#targetPoolInstanceHealth when checking the health of an instance.
     */
    kind?: string;
}
