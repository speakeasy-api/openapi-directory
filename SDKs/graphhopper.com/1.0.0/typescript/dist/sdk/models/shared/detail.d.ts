import { SpeakeasyBase } from "../../../internal/utils";
export declare class Detail extends SpeakeasyBase {
    /**
     * Reason code
     *
     * @remarks
     *
     * Code   |  Reason
     * :------|:---------
     * 1 | cannot serve required skill
     * 2 | cannot be visited within time window
     * 3 | does not fit into any vehicle due to capacity
     * 4 | cannot be assigned due to max distance constraint of vehicles
     * 21 | could not be assigned due to relation constraint
     * 22 | could not be assigned due to allowed vehicle constraint
     * 23 | could not be assigned due to max-time-in-vehicle constraint
     * 24 | driver does not need a break
     * 25 | could not be assigned due to disallowed vehicle constraint
     * 26 | could not be assigned due to max drive time constraint
     * 27 | could not be assigned due to max job constraint
     * 28 | could not be assigned due to max activity constraint
     * 50 | underlying location cannot be accessed over road network by at least one vehicle
     *
     */
    code?: number;
    /**
     * Id of unassigned service/shipment
     */
    id?: string;
    /**
     * Human readable reason as listed above
     */
    reason?: string;
}
