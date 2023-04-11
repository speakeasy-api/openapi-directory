import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateFieldServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateFieldSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateFieldCreateFieldRequest extends SpeakeasyBase {
    /**
     * The Field Type of the new field. Can be: a [Built-in Field Type](https://www.twilio.com/docs/autopilot/built-in-field-types), the `unique_name`, or the `sid` of a custom Field Type.
     */
    fieldType: string;
    /**
     * An application-defined string that uniquely identifies the new resource. This value must be a unique string of no more than 64 characters. It can be used as an alternative to the `sid` in the URL path to address the resource.
     */
    uniqueName: string;
}
export declare class CreateFieldRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the Task associated with the new resource.
     */
    assistantSid: string;
    requestBody?: CreateFieldCreateFieldRequest;
    /**
     * The SID of the [Task](https://www.twilio.com/docs/autopilot/api/task) resource associated with the new Field resource.
     */
    taskSid: string;
}
export declare class CreateFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    autopilotV1AssistantTaskField?: shared.AutopilotV1AssistantTaskField;
}
