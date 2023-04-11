import { SpeakeasyBase } from "../../../internal/utils";
import { Flight } from "./flight";
/**
 * Input definition for the ComputeFlightEmissions request.
 */
export declare class ComputeFlightEmissionsRequest extends SpeakeasyBase {
    /**
     * Required. Direct flights to return emission estimates for.
     */
    flights?: Flight[];
}
