import { SpeakeasyBase } from "../../../internal/utils";
import { GceInstanceFilter } from "./gceinstancefilter";
/**
 * Message describing resource filters
 */
export declare class ResourceFilter extends SpeakeasyBase {
    /**
     * Message describing compute engine instance filter
     */
    gceInstanceFilter?: GceInstanceFilter;
    /**
     * The label used for filter resource
     */
    inclusionLabels?: Record<string, string>;
    /**
     * The id pattern for filter resource
     */
    resourceIdPatterns?: string[];
    /**
     * The scopes of evaluation resource
     */
    scopes?: string[];
}
