import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveDisputeEvidenceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveDisputeEvidenceRequest extends SpeakeasyBase {
    /**
     * The ID of the dispute that you want to retrieve evidence from.
     */
    disputeId: string;
    /**
     * The ID of the evidence to retrieve.
     */
    evidenceId: string;
}
export declare class RetrieveDisputeEvidenceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveDisputeEvidenceResponse?: shared.RetrieveDisputeEvidenceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
