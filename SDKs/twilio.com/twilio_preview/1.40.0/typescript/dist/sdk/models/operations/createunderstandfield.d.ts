import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUnderstandFieldServerList: readonly ["https://preview.twilio.com"];
export declare class CreateUnderstandFieldSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUnderstandFieldCreateUnderstandFieldRequest extends SpeakeasyBase {
    /**
     * The unique name or sid of the FieldType. It can be any [Built-in Field Type](https://www.twilio.com/docs/assistant/api/built-in-field-types) or the unique_name or the Field Type sid of a custom Field Type.
     */
    fieldType: string;
    /**
     * A user-provided string that uniquely identifies this resource as an alternative to the sid. Unique up to 64 characters long.
     */
    uniqueName: string;
}
export declare class CreateUnderstandFieldRequest extends SpeakeasyBase {
    /**
     * The unique ID of the parent Assistant.
     */
    assistantSid: string;
    requestBody?: CreateUnderstandFieldCreateUnderstandFieldRequest;
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid: string;
}
export declare class CreateUnderstandFieldResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    previewUnderstandAssistantTaskField?: shared.PreviewUnderstandAssistantTaskField;
}
