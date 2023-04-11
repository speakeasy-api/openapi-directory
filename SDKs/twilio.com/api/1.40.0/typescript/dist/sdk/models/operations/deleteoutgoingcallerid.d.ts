import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteOutgoingCallerIdServerList: readonly ["https://api.twilio.com"];
export declare class DeleteOutgoingCallerIdSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteOutgoingCallerIdRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the OutgoingCallerId resources to delete.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the OutgoingCallerId resource to delete.
     */
    sid: string;
}
export declare class DeleteOutgoingCallerIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
