import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MessagesFetchAllSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class MessagesFetchAllRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of contact
     */
    contactId?: string;
    /**
     * ID of conversation
     */
    conversationId?: string;
    /**
     * Maximum number of results to return
     */
    limit?: number;
    /**
     * Results to skip when paginating through a result set
     */
    offset?: number;
}
export declare class MessagesFetchAllResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    messagesResponse?: shared.MessagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
