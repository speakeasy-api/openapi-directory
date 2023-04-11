import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSyncServiceServerList: readonly ["https://preview.twilio.com"];
export declare class DeleteSyncServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSyncServiceRequest extends SpeakeasyBase {
    sid: string;
}
export declare class DeleteSyncServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
