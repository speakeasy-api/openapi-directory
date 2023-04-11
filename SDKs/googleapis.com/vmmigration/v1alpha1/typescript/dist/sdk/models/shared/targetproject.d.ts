import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TargetProject message represents a target Compute Engine project for a migration or a clone.
 */
export declare class TargetProjectInput extends SpeakeasyBase {
    /**
     * The target project's description.
     */
    description?: string;
    /**
     * The target project ID (number) or project name.
     */
    project?: string;
}
/**
 * TargetProject message represents a target Compute Engine project for a migration or a clone.
 */
export declare class TargetProject extends SpeakeasyBase {
    /**
     * Output only. The time this target project resource was created (not related to when the Compute Engine project it points to was created).
     */
    createTime?: string;
    /**
     * The target project's description.
     */
    description?: string;
    /**
     * Output only. The name of the target project.
     */
    name?: string;
    /**
     * The target project ID (number) or project name.
     */
    project?: string;
    /**
     * Output only. The last time the target project resource was updated.
     */
    updateTime?: string;
}
