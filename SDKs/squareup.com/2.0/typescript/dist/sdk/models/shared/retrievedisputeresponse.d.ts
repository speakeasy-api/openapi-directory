import { SpeakeasyBase } from "../../../internal/utils";
import { Dispute } from "./dispute";
import { ErrorT } from "./error";
/**
 * Defines fields in a `RetrieveDispute` response.
 */
export declare class RetrieveDisputeResponse extends SpeakeasyBase {
    /**
     * Represents a dispute a cardholder initiated with their bank.
     */
    dispute?: Dispute;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
}
