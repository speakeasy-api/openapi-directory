import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { WorkweekConfig } from "./workweekconfig";
/**
 * The response to a request for a set of `WorkweekConfig` objects. The response contains
 *
 * @remarks
 * the requested `WorkweekConfig` objects and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export declare class ListWorkweekConfigsResponse extends SpeakeasyBase {
    /**
     * The value supplied in the subsequent request to fetch the next page of
     *
     * @remarks
     * `EmployeeWage` results.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * A page of `EmployeeWage` results.
     */
    workweekConfigs?: WorkweekConfig[];
}
