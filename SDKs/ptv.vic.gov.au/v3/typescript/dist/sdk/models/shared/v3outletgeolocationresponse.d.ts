import { SpeakeasyBase } from "../../../internal/utils";
import { V3OutletGeolocation } from "./v3outletgeolocation";
import { V3Status } from "./v3status";
/**
 * Ticket outlets near the specified location.
 */
export declare class V3OutletGeolocationResponse extends SpeakeasyBase {
    /**
     * myki ticket outlets
     */
    outlets?: V3OutletGeolocation[];
    status?: V3Status;
}
