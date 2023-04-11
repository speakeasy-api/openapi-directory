import { SpeakeasyBase } from "../../../internal/utils";
import { Payment } from "./payment";
/**
 * Response definition for the payments list rpc.
 */
export declare class ListPaymentsResponse extends SpeakeasyBase {
    /**
     * The payments returned in this list response.
     */
    payments?: Payment[];
}
