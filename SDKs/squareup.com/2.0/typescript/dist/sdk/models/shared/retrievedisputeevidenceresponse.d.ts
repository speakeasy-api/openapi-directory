import { SpeakeasyBase } from "../../../internal/utils";
import { DisputeEvidence } from "./disputeevidence";
import { ErrorT } from "./error";
/**
 * Defines the fields in a `RetrieveDisputeEvidence` response.
 */
export declare class RetrieveDisputeEvidenceResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    evidence?: DisputeEvidence;
}
