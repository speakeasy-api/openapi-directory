import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TerminalRefund } from "./terminalrefund";
/**
 * Success
 */
export declare class CancelTerminalRefundResponse extends SpeakeasyBase {
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    refund?: TerminalRefund;
}
