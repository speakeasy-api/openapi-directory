import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteQueryServerList: readonly ["https://autopilot.twilio.com"];
export declare class DeleteQuerySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteQueryRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to delete.
     */
    assistantSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Query resource to delete.
     */
    sid: string;
}
export declare class DeleteQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
