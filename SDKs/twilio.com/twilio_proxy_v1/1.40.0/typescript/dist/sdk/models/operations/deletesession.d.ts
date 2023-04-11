import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteSessionServerList: readonly ["https://proxy.twilio.com"];
export declare class DeleteSessionSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteSessionRequest extends SpeakeasyBase {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the resource to delete.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Session resource to delete.
     */
    sid: string;
}
export declare class DeleteSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
