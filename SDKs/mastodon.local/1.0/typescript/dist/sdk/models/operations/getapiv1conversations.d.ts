import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiV1ConversationsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetApiV1ConversationsRequest extends SpeakeasyBase {
    /**
     * Max number of results to return. Defaults to 20.
     */
    limit?: number;
    /**
     * Return results older than ID
     */
    maxId?: string;
    /**
     * Return results immediately newer than ID
     */
    minId?: string;
    /**
     * Return results newer than ID
     */
    sinceId?: string;
}
export declare class GetApiV1ConversationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success.
     */
    conversations?: shared.Conversation[];
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
