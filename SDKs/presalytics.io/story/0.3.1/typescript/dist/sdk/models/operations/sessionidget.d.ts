import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SessionIdGetRequest extends SpeakeasyBase {
    /**
     * Indicate whether the returned object should include child relationships
     */
    includeRelationships?: boolean;
    /**
     * The primary key for a view session
     */
    sessionId: string;
}
export declare class SessionIdGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    problemDetail?: shared.ProblemDetail;
    /**
     * A session object
     */
    session?: shared.Session;
}
