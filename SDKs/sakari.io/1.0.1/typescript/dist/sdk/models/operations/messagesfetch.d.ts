import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MessagesFetchSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class MessagesFetchRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of message to return
     */
    messageId: string;
}
export declare class MessagesFetchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    messageResponse?: shared.MessageResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
