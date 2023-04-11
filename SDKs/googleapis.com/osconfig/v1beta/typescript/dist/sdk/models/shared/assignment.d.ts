import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentGroupLabel } from "./assignmentgrouplabel";
import { AssignmentOsType } from "./assignmentostype";
/**
 * An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
 */
export declare class Assignment extends SpeakeasyBase {
    /**
     * Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example "env=prod or env=staging".
     */
    groupLabels?: AssignmentGroupLabel[];
    /**
     * Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix="prod-". Only supported for project-level policies.
     */
    instanceNamePrefixes?: string[];
    /**
     * Targets any of the instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`. Instance targeting is uncommon and is supported to facilitate the management of changes by the instance or to target specific VM instances for development and testing. Only supported for project-level policies and must reference instances within this project.
     */
    instances?: string[];
    /**
     * Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included.
     */
    osTypes?: AssignmentOsType[];
    /**
     * Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.
     */
    zones?: string[];
}
