import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteAppServerList: readonly ["https://microvisor.twilio.com"];
export declare class DeleteAppSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteAppRequest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies this App.
     */
    sid: string;
}
export declare class DeleteAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
