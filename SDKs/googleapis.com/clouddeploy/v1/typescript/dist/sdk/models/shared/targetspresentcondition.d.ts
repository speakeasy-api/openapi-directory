import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.
 */
export declare class TargetsPresentCondition extends SpeakeasyBase {
    /**
     * The list of Target names that do not exist. For example, projects/{project_id}/locations/{location_name}/targets/{target_name}.
     */
    missingTargets?: string[];
    /**
     * True if there aren't any missing Targets.
     */
    status?: boolean;
    /**
     * Last time the condition was updated.
     */
    updateTime?: string;
}
