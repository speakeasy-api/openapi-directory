import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateQueryServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateQuerySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateQueryCreateQueryRequest extends SpeakeasyBase {
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) string that specifies the language used for the new query. For example: `en-US`.
     */
    language: string;
    /**
     * The SID or unique name of the [Model Build](https://www.twilio.com/docs/autopilot/api/model-build) to be queried.
     */
    modelBuild?: string;
    /**
     * The end-user's natural language input. It can be up to 2048 characters long.
     */
    query: string;
    /**
     * The list of tasks to limit the new query to. Tasks are expressed as a comma-separated list of task `unique_name` values. For example, `task-unique_name-1, task-unique_name-2`. Listing specific tasks is useful to constrain the paths that a user can take.
     */
    tasks?: string;
}
export declare class CreateQueryRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the new resource.
     */
    assistantSid: string;
    requestBody?: CreateQueryCreateQueryRequest;
}
export declare class CreateQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    autopilotV1AssistantQuery?: shared.AutopilotV1AssistantQuery;
}
