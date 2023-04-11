import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteConnectAppServerList: readonly ["https://api.twilio.com"];
export declare class DeleteConnectAppSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteConnectAppRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ConnectApp resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the ConnectApp resource to fetch.
     */
    sid: string;
}
export declare class DeleteConnectAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
