import { SpeakeasyBase } from "../../../internal/utils";
import { Operation } from "./operation";
/**
 * ListOperationsResponse is the result of ListOperationsRequest.
 */
export declare class ListOperationsResponse extends SpeakeasyBase {
    /**
     * If any zones are listed here, the list of operations returned may be missing the operations from those zones.
     */
    missingZones?: string[];
    /**
     * A list of operations in the project in the specified zone.
     */
    operations?: Operation[];
}
