import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteInteractionServerList: readonly ["https://proxy.twilio.com"];
export declare class DeleteInteractionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteInteractionRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to delete.
     */
    sessionSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Interaction resource to delete.
     */
    sid: string;
}
export declare class DeleteInteractionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
