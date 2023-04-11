import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteChannelServerList: readonly ["https://flex-api.twilio.com"];
export declare class DeleteChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the Flex chat channel resource to delete.
     */
    sid: string;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
