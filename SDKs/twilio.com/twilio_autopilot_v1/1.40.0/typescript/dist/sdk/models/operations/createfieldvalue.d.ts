import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateFieldValueServerList: readonly ["https://autopilot.twilio.com"];
export declare class CreateFieldValueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateFieldValueCreateFieldValueRequest extends SpeakeasyBase {
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US`
     */
    language: string;
    /**
     * The string value that indicates which word the field value is a synonym of.
     */
    synonymOf?: string;
    /**
     * The Field Value data.
     */
    value: string;
}
export declare class CreateFieldValueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the new resource.
     */
    assistantSid: string;
    /**
     * The SID of the Field Type associated with the Field Value.
     */
    fieldTypeSid: string;
    requestBody?: CreateFieldValueCreateFieldValueRequest;
}
export declare class CreateFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    autopilotV1AssistantFieldTypeFieldValue?: shared.AutopilotV1AssistantFieldTypeFieldValue;
}
