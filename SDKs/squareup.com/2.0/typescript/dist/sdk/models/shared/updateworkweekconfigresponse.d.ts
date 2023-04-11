import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { WorkweekConfig } from "./workweekconfig";
/**
 * The response to a request to update a `WorkweekConfig` object. The response contains
 *
 * @remarks
 * the updated `WorkweekConfig` object and might contain a set of `Error` objects if
 * the request resulted in errors.
 */
export declare class UpdateWorkweekConfigResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Sets the day of the week and hour of the day that a business starts a
     *
     * @remarks
     * workweek. This is used to calculate overtime pay.
     */
    workweekConfig?: WorkweekConfig;
}
