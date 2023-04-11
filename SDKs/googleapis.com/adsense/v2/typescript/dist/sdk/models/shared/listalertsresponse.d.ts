import { SpeakeasyBase } from "../../../internal/utils";
import { Alert } from "./alert";
/**
 * Response definition for the alerts list rpc.
 */
export declare class ListAlertsResponse extends SpeakeasyBase {
    /**
     * The alerts returned in this list response.
     */
    alerts?: Alert[];
}
