import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1PollsIdRequest extends SpeakeasyBase {
    /**
     * ID of the poll in the database.
     */
    id: string;
}
export declare class GetApiV1PollsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Poll does not exist, or poll's parent status is private
     */
    error?: shared.ErrorT;
    /**
     * Get one poll.
     */
    poll?: shared.Poll;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
