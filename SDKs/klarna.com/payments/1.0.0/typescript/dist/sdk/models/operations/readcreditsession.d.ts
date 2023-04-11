import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReadCreditSessionRequest extends SpeakeasyBase {
    /**
     * session_id
     */
    sessionId: string;
}
export declare class ReadCreditSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    sessionRead?: shared.SessionRead;
}
