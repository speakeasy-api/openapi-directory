import { SpeakeasyBase } from "../../../internal/utils";
import { Alert } from "./alert";
/**
 * Response message for an alert listing request.
 */
export declare class ListAlertsResponse extends SpeakeasyBase {
    /**
     * The list of alerts.
     */
    alerts?: Alert[];
    /**
     * The token for the next page. If not empty, indicates that there may be more alerts that match the listing request; this value can be used in a subsequent ListAlertsRequest to get alerts continuing from last result of the current list call.
     */
    nextPageToken?: string;
}
