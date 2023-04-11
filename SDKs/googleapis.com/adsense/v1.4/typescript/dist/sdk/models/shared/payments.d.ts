import { SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
/**
 * Successful response
 */
export declare class Payments extends SpeakeasyBase {
    /**
     * The list of Payments for the account. One or both of a) the account's most recent payment; and b) the account's upcoming payment.
     */
    items?: Payment[];
    /**
     * Kind of list this is, in this case adsense#payments.
     */
    kind?: string;
}
