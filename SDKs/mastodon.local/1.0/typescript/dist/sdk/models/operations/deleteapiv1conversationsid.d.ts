import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteApiV1ConversationsIdSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class DeleteApiV1ConversationsIdRequest extends SpeakeasyBase {
    /**
     * ID of the conversation in the database
     */
    id: string;
}
export declare class DeleteApiV1ConversationsIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid or missing Authorization header
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success.
     */
    deleteApiV1ConversationsId200ApplicationJSONObject?: Record<string, any>;
}
