import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteWebChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class DeleteWebChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteWebChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the WebChannel resource to delete.
     */
    sid: string;
}
export declare class DeleteWebChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
