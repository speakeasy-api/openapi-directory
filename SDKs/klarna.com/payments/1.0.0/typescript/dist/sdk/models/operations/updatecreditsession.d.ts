import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCreditSessionRequest extends SpeakeasyBase {
    /**
     * session_request
     */
    sessionInput: shared.SessionInput;
    /**
     * session_id
     */
    sessionId: string;
}
export declare class UpdateCreditSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
