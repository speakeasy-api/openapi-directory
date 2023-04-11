import { SpeakeasyBase } from "../../../internal/utils";
import { WorkweekConfig } from "./workweekconfig";
/**
 * A request to update a `WorkweekConfig` object.
 */
export declare class UpdateWorkweekConfigRequest extends SpeakeasyBase {
    /**
     * Sets the day of the week and hour of the day that a business starts a
     *
     * @remarks
     * workweek. This is used to calculate overtime pay.
     */
    workweekConfig: WorkweekConfig;
}
