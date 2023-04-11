import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SessionsIdViewsGetRequest extends SpeakeasyBase {
    /**
     * The primary key for a view session
     */
    sessionId: string;
}
export declare class SessionsIdViewsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * A List of session views
     */
    views?: shared.View[];
}
