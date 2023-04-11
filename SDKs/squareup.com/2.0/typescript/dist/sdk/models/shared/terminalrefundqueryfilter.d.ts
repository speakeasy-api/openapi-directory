import { SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";
export declare class TerminalRefundQueryFilter extends SpeakeasyBase {
    /**
     * Represents a generic time range. The start and end values are
     *
     * @remarks
     * represented in RFC 3339 format. Time ranges are customized to be
     * inclusive or exclusive based on the needs of a particular endpoint.
     * Refer to the relevant endpoint-specific documentation to determine
     * how time ranges are handled.
     */
    createdAt?: TimeRange;
    /**
     * `TerminalRefund` objects associated with a specific device. If no device is specified, then all
     *
     * @remarks
     * `TerminalRefund` objects for the signed-in account are displayed.
     */
    deviceId?: string;
    /**
     * Filtered results with the desired status of the `TerminalRefund`.
     *
     * @remarks
     * Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, or `COMPLETED`.
     */
    status?: string;
}
