import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateQueryServerList: readonly ["https://autopilot.twilio.com"];
export declare class UpdateQuerySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateQueryUpdateQueryRequest extends SpeakeasyBase {
    /**
     * The SID of an optional reference to the [Sample](https://www.twilio.com/docs/autopilot/api/task-sample) created from the query.
     */
    sampleSid?: string;
    /**
     * The new status of the resource. Can be: `pending-review`, `reviewed`, or `discarded`
     */
    status?: string;
}
export declare class UpdateQueryRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resource to update.
     */
    assistantSid: string;
    requestBody?: UpdateQueryUpdateQueryRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Query resource to update.
     */
    sid: string;
}
export declare class UpdateQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    autopilotV1AssistantQuery?: shared.AutopilotV1AssistantQuery;
}
