import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConversationsFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class ConversationsFetchAllRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Results to skip when paginating through a result set
     */
    offset?: number;
}
export declare class ConversationsFetchAllResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    conversationsResponse?: shared.ConversationsResponse;
    /**
     * invalid request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
