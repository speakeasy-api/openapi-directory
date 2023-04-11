import { SpeakeasyBase } from "../../../internal/utils";
import { Advice } from "./advice";
/**
 * The type for this change, either ADDED, REMOVED, or MODIFIED.
 */
export declare enum ConfigChangeChangeTypeEnum {
    ChangeTypeUnspecified = "CHANGE_TYPE_UNSPECIFIED",
    Added = "ADDED",
    Removed = "REMOVED",
    Modified = "MODIFIED"
}
/**
 * Output generated from semantically comparing two versions of a service configuration. Includes detailed information about a field that have changed with applicable advice about potential consequences for the change, such as backwards-incompatibility.
 */
export declare class ConfigChange extends SpeakeasyBase {
    /**
     * Collection of advice provided for this change, useful for determining the possible impact of this change.
     */
    advices?: Advice[];
    /**
     * The type for this change, either ADDED, REMOVED, or MODIFIED.
     */
    changeType?: ConfigChangeChangeTypeEnum;
    /**
     * Object hierarchy path to the change, with levels separated by a '.' character. For repeated fields, an applicable unique identifier field is used for the index (usually selector, name, or id). For maps, the term 'key' is used. If the field has no unique identifier, the numeric index is used. Examples: - visibility.rules[selector=="google.LibraryService.ListBooks"].restriction - quota.metric_rules[selector=="google"].metric_costs[key=="reads"].value - logging.producer_destinations[0]
     */
    element?: string;
    /**
     * Value of the changed object in the new Service configuration, in JSON format. This field will not be populated if ChangeType == REMOVED.
     */
    newValue?: string;
    /**
     * Value of the changed object in the old Service configuration, in JSON format. This field will not be populated if ChangeType == ADDED.
     */
    oldValue?: string;
}
