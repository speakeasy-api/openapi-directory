import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { TerminalCheckout } from "./terminalcheckout";
/**
 * Success
 */
export declare class GetTerminalCheckoutResponse extends SpeakeasyBase {
    checkout?: TerminalCheckout;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
}
