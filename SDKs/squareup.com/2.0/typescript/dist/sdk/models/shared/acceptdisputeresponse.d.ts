import { SpeakeasyBase } from "../../../internal/utils";
import { Dispute } from "./dispute";
import { ErrorT } from "./error";
/**
 * Defines the fields in an `AcceptDispute` response.
 */
export declare class AcceptDisputeResponse extends SpeakeasyBase {
    /**
     * Represents a dispute a cardholder initiated with their bank.
     */
    dispute?: Dispute;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
}
