import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteArchivedCallServerList: readonly ["https://voice.twilio.com"];
export declare class DeleteArchivedCallSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteArchivedCallRequest extends SpeakeasyBase {
    /**
     * The date of the Call in UTC.
     */
    date: Date;
    /**
     * The Twilio-provided Call SID that uniquely identifies the Call resource to delete
     */
    sid: string;
}
export declare class DeleteArchivedCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
