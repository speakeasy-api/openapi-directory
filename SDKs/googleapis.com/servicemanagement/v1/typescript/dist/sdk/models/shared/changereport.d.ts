import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigChange } from "./configchange";
/**
 * Change report associated with a particular service configuration. It contains a list of ConfigChanges based on the comparison between two service configurations.
 */
export declare class ChangeReport extends SpeakeasyBase {
    /**
     * List of changes between two service configurations. The changes will be alphabetically sorted based on the identifier of each change. A ConfigChange identifier is a dot separated path to the configuration. Example: visibility.rules[selector='LibraryService.CreateBook'].restriction
     */
    configChanges?: ConfigChange[];
}
