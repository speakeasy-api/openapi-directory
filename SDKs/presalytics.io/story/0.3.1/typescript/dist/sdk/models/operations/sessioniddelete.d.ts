import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SessionIdDeleteRequest extends SpeakeasyBase {
    /**
     * The primary key for a view session
     */
    sessionId: string;
}
export declare class SessionIdDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    problemDetail?: shared.ProblemDetail;
}
