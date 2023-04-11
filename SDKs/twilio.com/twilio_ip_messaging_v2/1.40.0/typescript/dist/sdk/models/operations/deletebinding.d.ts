import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteBindingServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteBindingSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteBindingRequest extends SpeakeasyBase {
    serviceSid: string;
    sid: string;
}
export declare class DeleteBindingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
