import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AcceptDisputeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class AcceptDisputeRequest extends SpeakeasyBase {
    /**
     * The ID of the dispute you want to accept.
     */
    disputeId: string;
}
export declare class AcceptDisputeResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptDisputeResponse?: shared.AcceptDisputeResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
