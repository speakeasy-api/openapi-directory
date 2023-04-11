import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSimServerList: readonly ["https://wireless.twilio.com"];
export declare class DeleteSimSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSimRequest extends SpeakeasyBase {
    /**
     * The SID or the `unique_name` of the Sim resource to delete.
     */
    sid: string;
}
export declare class DeleteSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
