import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDisputeEvidenceTextSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateDisputeEvidenceTextRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    createDisputeEvidenceTextRequest: shared.CreateDisputeEvidenceTextRequest;
    /**
     * The ID of the dispute you want to upload evidence for.
     */
    disputeId: string;
}
export declare class CreateDisputeEvidenceTextResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDisputeEvidenceTextResponse?: shared.CreateDisputeEvidenceTextResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
