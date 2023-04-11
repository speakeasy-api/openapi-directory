import { SpeakeasyBase } from "../../../internal/utils";
import { DisputeEvidence } from "./disputeevidence";
import { ErrorT } from "./error";
/**
 * Defines the fields in a `ListDisputeEvidence` response.
 */
export declare class ListDisputeEvidenceResponse extends SpeakeasyBase {
    /**
     * The pagination cursor to be used in a subsequent request.
     *
     * @remarks
     * If unset, this is the final response. For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * The list of evidence previously uploaded to the specified dispute.
     */
    evidence?: DisputeEvidence[];
}
