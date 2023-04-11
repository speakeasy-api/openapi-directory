import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSinkServerList: readonly ["https://events.twilio.com"];
export declare class DeleteSinkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSinkRequest extends SpeakeasyBase {
    /**
     * A 34 character string that uniquely identifies this Sink.
     */
    sid: string;
}
export declare class DeleteSinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
