import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFieldServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListFieldSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFieldRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the resources to read.
     */
    assistantSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with the Field resources to read.
     */
    taskSid: string;
}
export declare class ListFieldListFieldResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListFieldListFieldResponse extends SpeakeasyBase {
    fields?: shared.AutopilotV1AssistantTaskField[];
    meta?: ListFieldListFieldResponseMeta;
}
export declare class ListFieldResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFieldResponse?: ListFieldListFieldResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
