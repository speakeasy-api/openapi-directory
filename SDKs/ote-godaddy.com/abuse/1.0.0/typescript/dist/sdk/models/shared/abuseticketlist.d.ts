import { SpeakeasyBase } from "../../../internal/utils";
import { Pagination } from "./pagination";
/**
 * Success
 */
export declare class AbuseTicketList extends SpeakeasyBase {
    pagination?: Pagination;
    /**
     * A list of abuse ticket ids originated by this reporter.
     */
    ticketIds: string[];
}
