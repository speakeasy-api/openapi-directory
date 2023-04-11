import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConversationsFetchSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class ConversationsFetchRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of template to return
     */
    conversationId: string;
}
export declare class ConversationsFetchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    conversationResponse?: shared.ConversationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
