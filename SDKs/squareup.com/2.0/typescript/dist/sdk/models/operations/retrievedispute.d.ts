import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveDisputeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveDisputeRequest extends SpeakeasyBase {
    /**
     * The ID of the dispute you want more details about.
     */
    disputeId: string;
}
export declare class RetrieveDisputeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveDisputeResponse?: shared.RetrieveDisputeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
