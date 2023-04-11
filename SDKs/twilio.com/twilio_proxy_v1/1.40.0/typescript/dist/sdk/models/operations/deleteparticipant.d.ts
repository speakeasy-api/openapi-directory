import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteParticipantServerList: readonly ["https://proxy.twilio.com"];
export declare class DeleteParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteParticipantRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the resource to delete.
     */
    sessionSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Participant resource to delete.
     */
    sid: string;
}
export declare class DeleteParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
