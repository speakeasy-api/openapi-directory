import { SpeakeasyBase } from "../../../internal/utils";
import { Dispute } from "./dispute";
import { ErrorT } from "./error";
/**
 * Defines the fields in a `SubmitEvidence` response.
 */
export declare class SubmitEvidenceResponse extends SpeakeasyBase {
    /**
     * Represents a dispute a cardholder initiated with their bank.
     */
    dispute?: Dispute;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
}
