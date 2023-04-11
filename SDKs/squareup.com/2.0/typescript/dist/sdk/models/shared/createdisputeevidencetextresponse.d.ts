import { SpeakeasyBase } from "../../../internal/utils";
import { DisputeEvidence } from "./disputeevidence";
import { ErrorT } from "./error";
/**
 * Defines the fields in a `CreateDisputeEvidenceText` response.
 */
export declare class CreateDisputeEvidenceTextResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    evidence?: DisputeEvidence;
}
