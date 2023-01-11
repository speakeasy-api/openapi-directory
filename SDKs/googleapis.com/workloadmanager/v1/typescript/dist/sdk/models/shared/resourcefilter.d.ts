import { SpeakeasyBase } from "../../../internal/utils";
import { GceInstanceFilter } from "./gceinstancefilter";
/**
 * Message describing resource filters
**/
export declare class ResourceFilter extends SpeakeasyBase {
    gceInstanceFilter?: GceInstanceFilter;
    inclusionLabels?: Record<string, string>;
    resourceIdPatterns?: string[];
    scopes?: string[];
}
