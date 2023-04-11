import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteUsAppToPersonServerList: readonly ["https://messaging.twilio.com"];
export declare class DeleteUsAppToPersonSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUsAppToPersonRequest extends SpeakeasyBase {
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/services/api) to delete the resource from.
     */
    messagingServiceSid: string;
    /**
     * The SID of the US A2P Compliance resource to delete `QE2c6890da8086d771620e9b13fadeba0b`.
     */
    sid: string;
}
export declare class DeleteUsAppToPersonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
