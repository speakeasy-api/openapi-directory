import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDisputeEvidenceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class ListDisputeEvidenceRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     *
     * @remarks
     * Provide this cursor to retrieve the next set of results for the original query.
     * For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * The ID of the dispute.
     */
    disputeId: string;
}
export declare class ListDisputeEvidenceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listDisputeEvidenceResponse?: shared.ListDisputeEvidenceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
