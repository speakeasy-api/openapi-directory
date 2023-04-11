import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteDisputeEvidenceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteDisputeEvidenceRequest extends SpeakeasyBase {
    /**
     * The ID of the dispute you want to remove evidence from.
     */
    disputeId: string;
    /**
     * The ID of the evidence you want to remove.
     */
    evidenceId: string;
}
export declare class DeleteDisputeEvidenceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDisputeEvidenceResponse?: shared.DeleteDisputeEvidenceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
