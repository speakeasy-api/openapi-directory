import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitEvidenceSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SubmitEvidenceRequest extends SpeakeasyBase {
    /**
     * The ID of the dispute that you want to submit evidence for.
     */
    disputeId: string;
}
export declare class SubmitEvidenceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    submitEvidenceResponse?: shared.SubmitEvidenceResponse;
}
