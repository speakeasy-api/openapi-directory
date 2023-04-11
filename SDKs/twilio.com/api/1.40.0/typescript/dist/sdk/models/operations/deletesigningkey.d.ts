import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSigningKeyServerList: readonly ["https://api.twilio.com"];
export declare class DeleteSigningKeySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSigningKeyRequest extends SpeakeasyBase {
    accountSid: string;
    sid: string;
}
export declare class DeleteSigningKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
