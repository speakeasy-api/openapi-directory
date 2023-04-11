import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostApiV1PollsIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class PostApiV1PollsIdRequestBody extends SpeakeasyBase {
    choices: string[];
}
export declare class PostApiV1PollsIdRequest extends SpeakeasyBase {
    requestBody?: PostApiV1PollsIdRequestBody;
    /**
     * ID of the poll in the database.
     */
    id: string;
}
export declare class PostApiV1PollsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    /**
     * Get one poll.
     */
    poll?: shared.Poll;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
