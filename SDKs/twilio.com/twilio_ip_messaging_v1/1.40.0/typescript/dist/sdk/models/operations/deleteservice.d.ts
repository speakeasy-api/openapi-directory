import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteServiceServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteServiceRequest extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
