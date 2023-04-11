import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteFieldValueServerList: readonly ["https://autopilot.twilio.com"];
export declare class DeleteFieldValueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteFieldValueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resources to delete.
     */
    assistantSid: string;
    /**
     * The SID of the Field Type associated with the Field Value to delete.
     */
    fieldTypeSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the FieldValue resource to delete.
     */
    sid: string;
}
export declare class DeleteFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
