import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MessagesSendSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class MessagesSendRequest extends SpeakeasyBase {
    sendMessagesRequest?: shared.SendMessagesRequest;
    /**
     * Account to apply operations to
     */
    accountId: string;
}
export declare class MessagesSendResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    sendMessagesResponse?: shared.SendMessagesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
